import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import LessonContent from '../components/LessonContent'
import Quiz from '../components/Quiz'
import ScoreCard from '../components/ScoreCard'

function LessonPage() {
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === parseInt(id))
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(null)

  if (!lesson) {
    return <div className="container">课程未找到</div>
  }

  const handleStartQuiz = () => {
    setShowQuiz(true)
    window.scrollTo(0, 0)
  }

  const handleQuizComplete = (results) => {
    setQuizComplete(true)
    setScore(results)
    window.scrollTo(0, 0)
  }

  const handleRestart = () => {
    setShowQuiz(false)
    setQuizComplete(false)
    setScore(null)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <header className="header">
        <h1 className="pixel-font">🎮 Python 冒险课堂</h1>
      </header>

      <div className="container">
        <Link to="/" className="back-button">
          ← 返回课程列表
        </Link>

        {!showQuiz && !quizComplete && (
          <>
            <LessonContent lesson={lesson} />
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button className="nav-button primary" onClick={handleStartQuiz}>
                开始 Quiz 🚀
              </button>
            </div>
          </>
        )}

        {showQuiz && !quizComplete && (
          <Quiz
            lesson={lesson}
            onComplete={handleQuizComplete}
            onBack={() => setShowQuiz(false)}
          />
        )}

        {quizComplete && (
          <ScoreCard
            lesson={lesson}
            score={score}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  )
}

export default LessonPage
