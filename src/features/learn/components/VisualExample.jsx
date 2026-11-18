function VisualExample({ example, index = 0, showAnswer = true }) {
  return (
    <div
      className={`visual-example ${showAnswer ? '' : 'is-practice-question'}`}
      style={{ '--example-delay': `${index * 180}ms` }}
      aria-label={
        showAnswer
          ? `${example.first} ${example.operator} ${example.second} equals ${example.answer}`
          : `${example.first} ${example.operator} ${example.second}`
      }
    >
      <div className="calculation">
        <div className="calculation-row">
          <div className="calculation-number-column">
            <span className="calculation-number calculation-first">
              {example.first}
            </span>
            <span className="calculation-number calculation-second">
              <span className="calculation-operator" aria-hidden="true">
                {example.operator}
              </span>
              {example.second}
            </span>
          </div>
        </div>
        <span className="calculation-line" aria-hidden="true" />
        <div className="calculation-result">
          {showAnswer ? (
            <strong className="calculation-answer">{example.answer}</strong>
          ) : (
            <span className="calculation-answer calculation-answer-placeholder">
              ?
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default VisualExample
