import { Question } from './Question'
import { useQuestionStore } from './store/questions'
import { Button, Stack, IconButton } from '@mui/material'
import {ArrowBackIosNew, ArrowForwardIos} from '@mui/icons-material'
import {Footer} from "./Footer.tsx";

export const Game = () => {
  const questions = useQuestionStore((state => state.questions))
  const currentQuestion = useQuestionStore((state => state.currentQuestion))
  const goNextQuestion = useQuestionStore((state => state.goNextQuestion))
  const goPreviousQuestion = useQuestionStore((state => state.goPreviousQuestion))
  const reset = useQuestionStore((state => state.reset))

  const currentQuestionInfo = questions[currentQuestion]

  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton disabled={currentQuestion === 0} onClick={goPreviousQuestion}>
          <ArrowBackIosNew />
        </IconButton>
        <span>{ currentQuestion + 1 }/{ questions.length }</span>
        <IconButton disabled={currentQuestion >= questions.length - 1} onClick={goNextQuestion}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info = { currentQuestionInfo } />
      <Button onClick={reset} variant='contained' sx={{mt: 2, mr: 2}}>
        Reiniciar!
      </Button>
      <Footer/>
    </>
  )
}