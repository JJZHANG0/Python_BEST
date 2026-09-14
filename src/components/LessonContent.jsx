import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

function LessonContent({ lesson }) {
  return (
    <div className="lesson-detail">
      <div className="lesson-content">
        <h1 style={{ color: 'var(--pixel-purple)', marginBottom: '10px' }}>
          第 {lesson.id} 课：{lesson.title}
        </h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          {lesson.description}
        </p>
        
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {lesson.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default LessonContent
