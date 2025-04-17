import { Button } from '@mui/material'
import { useQuestionStore } from './store/questions'

const LIMIT_QUESTION = 5

export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTION)
  }

  return (
    <Button onClick={handleClick} variant='contained'>
      Empezar!
    </Button>
  )
}