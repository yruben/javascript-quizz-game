import {Card, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionStore } from './store/questions';
import { type Question as QuestionType } from './types'
import { getBackgroundColor } from './utils/functions'

export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)
  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card variant="outlined" sx={{ bgcolor: '#2fc', p: 2, textAlign: 'left', marginTop: 4 }}>

      <Typography variant='h5' component='h2'>
        { info.question }
      </Typography>

      <SyntaxHighlighter language='javascript' style={ gradientDark } customStyle={{ fontSize: '14px' }}>
        { String(info.code ?? '') }
      </SyntaxHighlighter>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={ index } disablePadding divider sx={{ backgroundColor: getBackgroundColor(info, index) }}>
            <ListItemButton onClick={ handleClick(index) } disabled={ info.userSelectedAnswer !== undefined }>
              <ListItemText primary={ answer } sx={{ textAlign: 'center' }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}