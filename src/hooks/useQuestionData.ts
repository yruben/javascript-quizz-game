import { useQuestionStore } from '../store/questions';

export const useQuestionData = () => {
  const questions = useQuestionStore((state) => state.questions)
  let correctAnswers = 0
  let incorrectAnswers = 0
  let unanswered = 0

  questions.forEach((question) => {
    if (question.userSelectedAnswer == null) {
      unanswered++
    } else if (question.isCorrectUserAnswer) {
      correctAnswers++
    } else {
      incorrectAnswers++
    }
  })

  return { correctAnswers, incorrectAnswers, unanswered }
}