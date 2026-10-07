import './App.css'

function App() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Mental Math</h1>
        <p className="hero-description">
          Learn and practice mental arithmetic. Build fast, confident
          calculation skills one technique at a time.
        </p>
        <a className="cta" href="#learn">
          Start learning
        </a>
      </section>

      <section className="areas" aria-label="Main areas">
        <article id="learn" className="area-card">
          <h2>Learn</h2>
          <p>
            Progress through chapters and lessons. Each lesson teaches a
            mental arithmetic technique and is followed by practice.
          </p>
        </article>

        <article id="practice" className="area-card">
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

export default App
