import { Link } from 'react-router-dom'

function LessonCard({ chapter, lesson }) {
  return (
    <Link
      className="lesson-card"
      to={`/learn/chapter/${chapter.id}/lesson/${lesson.id}`}
    >
      <span className="lesson-number">{lesson.id}</span>

      <div className="lesson-content">
        <p className="lesson-label">Lesson</p>
        <h3>{lesson.title}</h3>
      </div>

      <span className="lesson-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}

export default LessonCard
