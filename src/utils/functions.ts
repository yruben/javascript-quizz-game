import { type Question as QuestionType } from '../types';

export const getBackgroundColor = (info: QuestionType, index: number)=> {
  if (info.userSelectedAnswer === undefined || info.userSelectedAnswer === null) return 'transparent'
  if (index !== info.correctAnswer && info.userSelectedAnswer !== index) return 'transparent';
  if (index !== info.correctAnswer && info.userSelectedAnswer === index) return 'red';
  if (index === info.correctAnswer) return 'green';
  return 'transparent';
}