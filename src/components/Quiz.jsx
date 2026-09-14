import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeEditor from './CodeEditor'

function Quiz({ lesson, onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [testResults, setTestResults] = useState({})

  const questions = lesson.quiz || []
  const question = questions[currentQuestion]

  const handleCodeSubmit = (questionId, code, passed) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: code
    }))
    setTestResults(prev => ({
      ...prev,
      [questionId]: passed
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    const totalQuestions = questions.length
    const correctAnswers = Object.values(testResults).filter(result => result).length
    const percentage = Math.round((correctAnswers / totalQuestions) * 100)
    
    onComplete({
      total: totalQuestions,
      correct: correctAnswers,
      percentage,
      answers,
      testResults
    })
  }

  const allQuestionsAnswered = questions.every(q => answers[q.id] !== undefined)
  const canSubmit = allQuestionsAnswered && currentQuestion === questions.length - 1

  return (
    <div className="quiz-section">
      <div className="quiz-header">
        <h2>📝 Quiz 时间</h2>
        <div className="quiz-progress">
          问题 {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      {question && (
        <div className="question-card">
          <div className="question-title">
            <strong>{currentQuestion + 1}. </strong>
            <ReactMarkdown>{question.question}</ReactMarkdown>
          </div>

          {question.hint && (
            <div style={{ 
              background: '#fff3cd', 
              border: '3px solid var(--text-dark)',
              borderRadius: '6px',
              padding: '12px 16px', 
              marginBottom: '20px',
              color: '#856404' 
            }}>
              💡 提示：{question.hint}
            </div>
          )}

          <CodeEditor
            questionId={question.id}
            initialCode={answers[question.id] !== undefined ? answers[question.id] : (question.starterCode || '')}
            testCases={question.testCases}
            onSubmit={handleCodeSubmit}
            previousResult={testResults[question.id]}
          />
        </div>
      )}

      <div className="quiz-navigation">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← 上一题
        </button>

        <div style={{ color: '#666', fontSize: '0.95em' }}>
          已回答：{Object.keys(answers).length} / {questions.length}
        </div>

        {currentQuestion < questions.length - 1 ? (
          <button className="nav-button" onClick={handleNext}>
            下一题 →
          </button>
        ) : (
          <button
            className="nav-button primary"
            onClick={handleSubmitQuiz}
            disabled={!allQuestionsAnswered}
          >
            提交 Quiz ✓
          </button>
        )}
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={onBack}
          style={{
            padding: '10px 20px',
            background: '#ddd',
            border: '2px solid var(--text-dark)',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          返回课程内容
        </button>
      </div>
    </div>
  )
}

export default Quiz
