import './App.css'

function App() {
  return (
    <>
      {/* Hidden SVG that defines the paper-grain filter used by body::before in index.css */}
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
    </>
  )
}

export default App
