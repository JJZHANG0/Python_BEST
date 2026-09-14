import React, { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'

let pyodideInstance = null

async function loadPyodide() {
  if (!pyodideInstance) {
    const { loadPyodide } = await import('pyodide')
    pyodideInstance = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
    })
  }
  return pyodideInstance
}

function CodeEditor({ questionId, initialCode, testCases, onSubmit, previousResult }) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isPyodideReady, setIsPyodideReady] = useState(false)
  const [testPassed, setTestPassed] = useState(previousResult || null)

  useEffect(() => {
    loadPyodide().then(() => {
      setIsPyodideReady(true)
    }).catch(err => {
      setOutput(`加载 Python 环境失败: ${err.message}`)
    })
  }, [])

  const runCode = async () => {
    if (!isPyodideReady) {
      setOutput('Python 环境正在加载中...')
      return
    }

    setIsRunning(true)
    setOutput('运行中...')

    try {
      const pyodide = await loadPyodide()
      
      pyodide.globals.clear()
      
      const captureCode = `
import sys
from io import StringIO

__output__ = StringIO()
sys.stdout = __output__
sys.stderr = __output__

try:
${code.split('\n').map(line => '    ' + line).join('\n')}
    __result__ = __output__.getvalue()
except Exception as e:
    __result__ = f"错误: {type(e).__name__}: {str(e)}"
`

      await pyodide.runPythonAsync(captureCode)
      const result = pyodide.globals.get('__result__')
      setOutput(result || '(无输出)')
    } catch (err) {
      setOutput(`执行错误: ${err.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const runTests = async () => {
    if (!isPyodideReady) {
      setOutput('Python 环境正在加载中...')
      return
    }

    if (!testCases || testCases.length === 0) {
      setOutput('没有测试用例')
      return
    }

    setIsRunning(true)
    setOutput('运行测试...')

    try {
      const pyodide = await loadPyodide()
      
      let allPassed = true
      let results = []

      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i]
        
        pyodide.globals.clear()
        
        const testCode = `
import sys
from io import StringIO

${code}

__test_output__ = StringIO()
sys.stdout = __test_output__

try:
${testCase.code.split('\n').map(line => '    ' + line).join('\n')}
    __test_result__ = __test_output__.getvalue().strip()
    __test_success__ = True
except Exception as e:
    __test_result__ = f"错误: {type(e).__name__}: {str(e)}"
    __test_success__ = False
`

        await pyodide.runPythonAsync(testCode)
        const testResult = pyodide.globals.get('__test_result__')
        const testSuccess = pyodide.globals.get('__test_success__')
        
        const passed = testSuccess && testResult === testCase.expected
        
        results.push({
          index: i + 1,
          passed,
          actual: testResult,
          expected: testCase.expected,
          hidden: testCase.hidden
        })

        if (!passed) {
          allPassed = false
        }
      }

      const visibleResults = results.filter(r => !r.hidden)
      const hiddenCount = results.filter(r => r.hidden).length
      const hiddenPassed = results.filter(r => r.hidden && r.passed).length

      let outputText = '测试结果:\n\n'
      visibleResults.forEach(r => {
        outputText += `测试 ${r.index}: ${r.passed ? '✓ 通过' : '✗ 失败'}\n`
        if (!r.passed) {
          outputText += `  期望: ${r.expected}\n`
          outputText += `  实际: ${r.actual}\n`
        }
      })

      if (hiddenCount > 0) {
        outputText += `\n隐藏测试: ${hiddenPassed}/${hiddenCount} 通过\n`
      }

      if (allPassed) {
        outputText += '\n🎉 所有测试通过！'
        setTestPassed(true)
        onSubmit(questionId, code, true)
      } else {
        outputText += '\n继续努力！'
        setTestPassed(false)
        onSubmit(questionId, code, false)
      }

      setOutput(outputText)
    } catch (err) {
      setOutput(`测试错误: ${err.message}`)
      setTestPassed(false)
      onSubmit(questionId, code, false)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="code-editor-container">
      <div className="editor-toolbar">
        <button
          className="editor-button run"
          onClick={runCode}
          disabled={isRunning || !isPyodideReady}
        >
          {isPyodideReady ? '▶ 运行代码' : '⏳ 加载中...'}
        </button>
        <button
          className="editor-button"
          onClick={runTests}
          disabled={isRunning || !isPyodideReady}
        >
          ✓ 提交答案
        </button>
        {testPassed !== null && (
          <span style={{ 
            color: 'white', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>
            {testPassed ? '✓ 已通过' : '✗ 未通过'}
          </span>
        )}
      </div>

      <Editor
        height="300px"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />

      {output && (
        <div className={`output-panel ${testPassed === true ? 'success' : testPassed === false ? 'error' : ''}`}>
          {output}
        </div>
      )}
    </div>
  )
}

export default CodeEditor
