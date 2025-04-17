import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import confetti from 'canvas-confetti'
import { type State } from '../types'

export const useQuestionStore = create<State>()(persist((setState, getState) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number): Promise<void> => {
      const request = await fetch('http://localhost:5173/javascript_quiz_questions_unique.json')
      const requestToJson = await request.json()
      const randomQuestions = requestToJson.sort(() => Math.random() - 0.5).slice(0, limit)

      setState((state) => ({...state, questions: randomQuestions}))
    },
    selectAnswer: (questioId: number, answerIndex: number): void => {
      const { questions } = getState()
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex((question) => question.id === questioId)
      const question = newQuestions[questionIndex]
      const isCorrectUserAnswer = question.correctAnswer === answerIndex
      if (isCorrectUserAnswer) {
        confetti()
      }

      newQuestions[questionIndex] = {
        ...question,
        userSelectedAnswer: answerIndex,
        isCorrectUserAnswer
      }

      setState({ questions: newQuestions })
    },
    reset: (): void => {
      setState({ questions: [], currentQuestion: 0 })
    },
    goNextQuestion: (): void => {
      const { currentQuestion, questions } = getState()
      if (currentQuestion + 1 >= questions.length) return
      setState({ currentQuestion: currentQuestion + 1 })
    },
    goPreviousQuestion: (): void => {
      const { currentQuestion } = getState()
      if (currentQuestion - 1 < 0) return
      setState({ currentQuestion: currentQuestion - 1 })
    }
  }
}, { name: 'questions' }))