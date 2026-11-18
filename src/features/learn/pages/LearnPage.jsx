import { chapters } from '../../../data/curriculum'
import ChapterCard from '../components/ChapterCard'
function LearnPage() {
  const chapter = chapters[0]

  return (
    <main className="learn-page">
      <header className="learn-header">
        <p>Learn</p>
        <h1>Learn mental arithmetic step by step.</h1>
      </header>

      <ChapterCard chapter={chapter} />
    </main>
  )
}

export default LearnPage