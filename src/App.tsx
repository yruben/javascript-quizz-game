//import { useState } from 'react'
import { Container, Typography, Stack } from '@mui/material'
import { useQuestionStore } from './store/questions'
import { JavascriptLogo } from './assets/JavascriptLogo'
import { Start } from './Start'
import { Game } from './Game';
import './App.css'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>

        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavascriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>
        <Typography variant='h4' component='h2'>
          {
            questions.length === 0
            ? <Start/>
            : <Game/>
          }
        </Typography>
      </Container>
    </main>
  )
}

export default App
