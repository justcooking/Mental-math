import { Link, useParams } from 'react-router-dom'
import { chapters } from '../../../data/curriculum'
import LessonPractice from '../components/LessonPractice'
import VisualExample from '../components/VisualExample'
import LessonSteps from '../components/LessonSteps'

function LessonPage() {
  const { chapterId, lessonId } = useParams()
  const chapter = chapters.find((item) => String(item.id) === chapterId)
  const lesson = chapter?.lessons.find((item) => item.id === lessonId)

  if (!chapter || !lesson) {
    return (
      <main className="lesson-page">
        <p className="lesson-eyebrow">Learn</p>
        <h1>Lesson not found</h1>
        <p>That lesson is not available in the current curriculum.</p>
        <Link className="text-link" to="/learn">
          Back to Learn
        </Link>
      </main>
    )
  }

  return (
    <main className="lesson-page">
      <Link className="back-link" to="/learn">
        ← Back to Learn
      </Link>

      <header className="lesson-header">
        <p className="lesson-eyebrow">
          Chapter {chapter.id} · Lesson {lesson.id}
        </p>
        <h1>{lesson.title}</h1>
        <p className="lesson-skill">{lesson.skill}</p>
      </header>

      {lesson.steps ? (
        // New interactive lesson path — driven by the steps array.
        <>
          <LessonSteps steps={lesson.steps} />

          {lesson.practice && (
            <section className="lesson-practice" aria-labelledby="practice-heading">
              <p className="section-label">Lesson practice</p>
              <h2 id="practice-heading">Practice this lesson</h2>
              <p>Use the left-to-right method to solve each problem.</p>
              <LessonPractice questions={lesson.practice} />
            </section>
          )}
        </>
      ) : lesson.examples && lesson.practice ? (
        // Legacy path — kept for any lesson without a steps array.
        <>
          <section className="lesson-section">
            <p className="section-label">The method</p>
            <p>{lesson.method}</p>
          </section>

          <section className="lesson-section">
            <p className="section-label">Examples</p>
            <div className="example-list">
              {lesson.examples.map((example, index) => (
                <VisualExample
                  key={`${example.first}-${example.second}`}
                  example={example}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="lesson-practice" aria-labelledby="practice-heading">
            <p className="section-label">Lesson practice</p>
            <h2 id="practice-heading">Practice this lesson</h2>
            <p>Use the left-to-right method to solve each problem.</p>
            <LessonPractice questions={lesson.practice} />
          </section>
        </>
      ) : (
        // Stub — lesson is in the curriculum but content is not yet ready.
        <section className="lesson-section lesson-coming-soon">
          <p className="section-label">Coming next</p>
          <h2>Lesson content is being prepared.</h2>
          <p>
            This lesson is part of the curriculum and will be available soon.
          </p>
        </section>
      )}
    </main>
  )
}

export default LessonPage
