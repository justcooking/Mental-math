function InsightStep({ step }) {
  return (
    <div className="insight-step">
      {step.heading && (
        <p className="insight-heading">{step.heading}</p>
      )}
      <p className="insight-text">{step.text}</p>
    </div>
  )
}

export default InsightStep
