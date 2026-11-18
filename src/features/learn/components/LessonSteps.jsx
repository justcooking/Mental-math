import NarrationStep from './steps/NarrationStep'
import WorkedExampleStep from './steps/WorkedExampleStep'
import InsightStep from './steps/InsightStep'

// Maps step.type to its component.
// Add new step types here as future lessons require them.
const STEP_COMPONENTS = {
  narration: NarrationStep,
  'worked-example': WorkedExampleStep,
  insight: InsightStep,
}

function LessonSteps({ steps }) {
  return (
    <div className="lesson-steps">
      {steps.map((step, index) => {
        const StepComponent = STEP_COMPONENTS[step.type]
        if (!StepComponent) return null
        return <StepComponent key={index} step={step} />
      })}
    </div>
  )
}

export default LessonSteps
