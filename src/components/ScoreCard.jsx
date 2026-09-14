import React, { useRef, useEffect } from 'react'

function ScoreCard({ lesson, score, onRestart }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      drawScoreCard()
    }
  }, [score])

  const drawScoreCard = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = 800
    const height = 600

    canvas.width = width
    canvas.height = height

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#ff6b9d')
    gradient.addColorStop(1, '#c06fff')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, 120)

    ctx.strokeStyle = '#2a2a2a'
    ctx.lineWidth = 6
    ctx.strokeRect(0, 0, width, height)
    ctx.strokeRect(30, 140, width - 60, height - 180)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 40px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('🎮 Python 冒险课堂', width / 2, 70)

    ctx.fillStyle = '#2a2a2a'
    ctx.font = 'bold 28px Arial'
    ctx.fillText(`第 ${lesson.id} 课：${lesson.title}`, width / 2, 200)

    const percentage = score.percentage
    let emoji = '🌟'
    let color = '#4dff88'
    let message = '继续加油！'

    if (percentage === 100) {
      emoji = '🏆'
      color = '#ffd24d'
      message = '完美通关！'
    } else if (percentage >= 80) {
      emoji = '🎉'
      color = '#4da6ff'
      message = '表现优秀！'
    } else if (percentage >= 60) {
      emoji = '✨'
      color = '#ff9d4d'
      message = '继续努力！'
    }

    ctx.font = 'bold 120px Arial'
    ctx.fillStyle = color
    ctx.fillText(`${percentage}%`, width / 2, 360)

    ctx.font = 'bold 32px Arial'
    ctx.fillStyle = '#2a2a2a'
    ctx.fillText(message, width / 2, 420)

    ctx.font = '24px Arial'
    ctx.fillStyle = '#666'
    ctx.fillText(`正确：${score.correct} / ${score.total}`, width / 2, 470)

    ctx.font = '60px Arial'
    ctx.fillText(emoji, width / 2, 540)

    ctx.fillStyle = '#999'
    ctx.font = '16px Arial'
    const date = new Date().toLocaleDateString('zh-CN')
    ctx.fillText(date, width / 2, height - 20)
  }

  const downloadScoreCard = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `Python课程-第${lesson.id}课-成绩单.png`
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    })
  }

  const getMessage = () => {
    const percentage = score.percentage
    if (percentage === 100) return '完美通关！你是 Python 大师！🏆'
    if (percentage >= 80) return '表现优秀！继续保持！🎉'
    if (percentage >= 60) return '不错的开始！再接再厉！✨'
    return '继续努力！多多练习会更好！💪'
  }

  return (
    <div className="quiz-section">
      <div className="score-card-section">
        <h2 style={{ color: 'var(--pixel-purple)', marginBottom: '20px' }}>
          Quiz 完成！
        </h2>

        <div className="score-display">
          {score.percentage}%
        </div>

        <div className="score-message">
          {getMessage()}
        </div>

        <div className="score-details">
          <p><strong>课程：</strong>第 {lesson.id} 课 - {lesson.title}</p>
          <p><strong>正确题数：</strong>{score.correct} / {score.total}</p>
          <p><strong>正确率：</strong>{score.percentage}%</p>
          <p><strong>完成时间：</strong>{new Date().toLocaleString('zh-CN')}</p>
        </div>

        <canvas
          ref={canvasRef}
          style={{
            display: 'none'
          }}
        />

        <button className="download-button" onClick={downloadScoreCard}>
          📥 下载成绩图
        </button>

        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="nav-button" onClick={onRestart}>
            重新测试
          </button>
          <button
            className="nav-button primary"
            onClick={() => window.location.href = '/'}
          >
            返回课程列表
          </button>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f5f5f5',
          border: '3px solid var(--text-dark)',
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <h3 style={{ marginBottom: '15px' }}>📊 详细结果</h3>
          {lesson.quiz && lesson.quiz.map((q, index) => (
            <div key={q.id} style={{
              padding: '10px',
              marginBottom: '10px',
              background: score.testResults[q.id] ? '#e8f5e9' : '#ffebee',
              borderRadius: '4px'
            }}>
              <strong>问题 {index + 1}:</strong> {score.testResults[q.id] ? '✓ 正确' : '✗ 错误'}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
