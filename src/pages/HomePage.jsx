import React from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'

function HomePage() {
  return (
    <div>
      <header className="header">
        <h1 className="pixel-font">🎮 Python 冒险课堂</h1>
        <p>从零基础到 Django 高手的 15 堂课程</p>
      </header>

      <div className="container">
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={`lesson-card ${lesson.isChallenge ? 'challenge' : ''}`}>
                <div className="lesson-number">第 {lesson.id} 课</div>
                <div className="lesson-title">{lesson.title}</div>
                <div className="lesson-desc">{lesson.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
