import { useState } from 'react'
import VisualExample from './VisualExample'

function LessonPractice({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState(null)

  const question = questions[questionIndex]
  const isComplete = questionIndex >= questions.length

  function handleSubmit(event) {
    event.preventDefault()

    if (!answer.trim() || feedback) {
      return
    }

    const isCorrect = answer.trim() === question.answer
    setFeedback({ isCorrect, correctAnswer: question.answer })
    if (isCorrect) {
      setScore((currentScore) => currentScore + 1)
    }
  }

  function handleNext() {
    setQuestionIndex((currentIndex) => currentIndex + 1)
    setAnswer('')
    setFeedback(null)
  }

  function handleRestart() {
    setQuestionIndex(0)
    setAnswer('')
    setScore(0)
    setFeedback(null)
  }

  if (isComplete) {
    return (
      <div className="practice-complete">
        <p className="section-label">Practice complete</p>
        <h3>
          You scored {score} out of {questions.length}.
        </h3>
        <button className="practice-button" type="button" onClick={handleRestart}>
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="practice-session">
      <div className="practice-progress">
        Question {questionIndex + 1} of {questions.length}
      </div>

      <div className="practice-question">
        <VisualExample example={question} showAnswer={false} />
      </div>

      <form className="practice-form" onSubmit={handleSubmit}>
        <label htmlFor="practice-answer">Your answer</label>
        <div className="practice-input-row">
          <input
            id="practice-answer"
            inputMode="numeric"
            autoComplete="off"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            disabled={Boolean(feedback)}
          />
          <button className="practice-button" type="submit" disabled={!answer.trim()}>
            Check
          </button>
        </div>
      </form>

      {feedback && (
        <div
          className={`practice-feedback ${
            feedback.isCorrect ? 'is-correct' : 'is-incorrect'
          }`}
          role="status"
        >
          <p>
            {feedback.isCorrect
              ? 'Correct.'
              : `Not quite. The answer is ${feedback.correctAnswer}.`}
          </p>
          <button className="practice-button" type="button" onClick={handleNext}>
            {questionIndex === questions.length - 1 ? 'See results' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  )
}

export default LessonPractice
