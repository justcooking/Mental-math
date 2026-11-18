import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LearnPage from './features/learn/pages/LearnPage'
import LessonPage from './features/learn/pages/LessonPage'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Mental Math</h1>

        <p className="hero-description">
          Learn and practice mental arithmetic. Build fast, confident
          calculation skills one technique at a time.
        </p>

        <a className="cta" href="/learn">
          Start learning
        </a>
      </section>

      <section className="areas" aria-label="Main areas">
        <article className="area-card">
          <h2>Learn</h2>
          <p>
            Progress through chapters and lessons. Each lesson teaches a
            mental arithmetic technique and is followed by practice.
          </p>
        </article>

        <article className="area-card">
          <h2>Practice</h2>
          <p>
            Practice techniques independently, whenever you like, without
            following the lessons in order.
          </p>
        </article>
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: 'absolute' }}
      >
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.95"
            numOctaves="4"
            stitchTiles="stitch"
            seed="17"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route
            path="/learn/chapter/:chapterId/lesson/:lessonId"
            element={<LessonPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App