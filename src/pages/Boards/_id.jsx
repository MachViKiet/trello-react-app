// Board details

// import React from 'react'
import { Container } from '@mui/material'

import AppBar from '~/components/AppBar/index'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: '100vh' }}>
      <AppBar></AppBar>

      <BoardBar></BoardBar>

      <BoardContent></BoardContent>

    </Container>
  )
}

export default Board
