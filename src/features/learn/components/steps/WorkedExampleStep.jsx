import { useEffect, useState } from 'react'

function WorkedExampleStep({ step }) {
  const [stepIndex, setStepIndex] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)

  const label = step.label
  const expression =
    step.expression ||
    (step.problem
      ? `${step.problem.first} ${step.problem.operator} ${step.problem.second}`
      : '')
  const stepsList = step.steps || step.mentalSteps || []
  const [firstNumber, secondNumber] = expression.split(/\s*\+\s*/)

  const isStarted = stepIndex >= 0
  const isComplete = stepIndex >= stepsList.length
  const currentStep = isStarted && !isComplete ? stepsList[stepIndex] : null
  const finalResult = stepsList.length > 0 ? stepsList[stepsList.length - 1].result : ''
  const isLastStep = stepIndex === stepsList.length - 1

  useEffect(() => {
    if (!isPlaying) return undefined

    const timer = window.setInterval(() => {
      setStepIndex((index) => {
        const nextIndex = index + 1
        if (nextIndex >= stepsList.length) {
          setIsPlaying(false)
        }
        return nextIndex
      })
    }, 1450)

    return () => window.clearInterval(timer)
  }, [isPlaying, stepsList.length])

  function handleAdvance() {
    setIsPlaying(false)
    setStepIndex((i) => i + 1)
  }

  function handleBegin() {
    setStepIndex(0)
  }

  function handlePlay() {
    if (isComplete) {
      setStepIndex(0)
    }
    setIsPlaying(true)
  }

  function handleReset() {
    setIsPlaying(false)
    setStepIndex(-1)
  }

  return (
    <div className="wex">
      {label && <p className="wex-label">{label}</p>}

      <div className={`wex-stage${isStarted ? ' wex-stage--active' : ''}`} aria-label={expression}>
        {isStarted && (
          <div className="wex-question-mini" aria-label={`Question: ${expression}`}>
            <span>{firstNumber}</span>
            <span>+{secondNumber}</span>
            <span className="wex-rule" aria-hidden="true" />
          </div>
        )}

        {!isStarted ? (
          <div className="wex-column wex-column--main" aria-label={`Starting problem: ${expression}`}>
            <span>{firstNumber}</span>
            <span>+{secondNumber}</span>
            <span className="wex-rule" aria-hidden="true" />
          </div>
        ) : isComplete ? (
          <div className="wex-final" key="complete" aria-live="polite">
            <span className="wex-final-label">Total</span>
            <span className="wex-answer">{finalResult}</span>
          </div>
        ) : currentStep ? (
          <div className="wex-column wex-column--main wex-column--animated" key={stepIndex} aria-label={`${currentStep.calculation} equals ${currentStep.result}`}>
            <span className="wex-running">{currentStep.calculation.split(/\s*\+\s*/)[0]}</span>
            <span className="wex-added">+{currentStep.addedChunk ?? currentStep.calculation.split(/\s*\+\s*/)[1]}</span>
            <span className="wex-rule" aria-hidden="true" />
            <span className="wex-calc-running">{currentStep.result}</span>
          </div>
        ) : null}
      </div>

      <div className="wex-body">
        {!isStarted && (
          <p className="wex-prompt">
            Work through this example mentally, one step at a time.
          </p>
        )}

        {currentStep && <p className="wex-note" aria-live="polite">{currentStep.explanation}</p>}

        {stepIndex === -1 ? (
          <button className="wex-btn" type="button" onClick={handleBegin}>Begin</button>
        ) : isComplete ? (
          <button className="wex-btn wex-btn--ghost" type="button" onClick={handleReset}>Try again</button>
        ) : (
          <div className="wex-controls">
            <button className="wex-btn" type="button" onClick={handlePlay} aria-pressed={isPlaying}>
              {isPlaying ? 'Playing…' : '▶ Play'}
            </button>
            <button className="wex-btn wex-btn--ghost" type="button" onClick={handleAdvance}>
              {isLastStep ? 'Show total →' : 'Next step →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkedExampleStep
