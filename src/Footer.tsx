import { useQuestionData } from './hooks/useQuestionData';

export const Footer = () => {
const { correctAnswers, incorrectAnswers, unanswered } = useQuestionData()

  return (
    <footer style={{marginTop: '16px', textAlign: 'center', fontSize: '16px'}}>
      <strong>{`✅ ${correctAnswers} correctas - ❌ ${incorrectAnswers} incorrectas - ⁉️${unanswered} sin responder`}</strong>
    </footer>
  )
}