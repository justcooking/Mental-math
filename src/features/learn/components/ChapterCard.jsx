import LessonCard from './LessonCard'

function ChapterCard({ chapter }) {
  return (
    <section className="chapter-card">
      <header className="chapter-header">
        <div>
          <p className="chapter-number">Chapter {chapter.id}</p>
          <h2>{chapter.title}</h2>
          <p className="chapter-focus">{chapter.focus}</p>
        </div>

        <span className="chapter-level">{chapter.level}</span>
      </header>

      <div className="lesson-list">
        {chapter.lessons.map((lesson) => (
          <LessonCard key={lesson.id} chapter={chapter} lesson={lesson} />
        ))}
      </div>

      <button className="chapter-practice">
        Chapter Practice
        <span aria-hidden="true">→</span>
      </button>
    </section>
  )
}

export default ChapterCard