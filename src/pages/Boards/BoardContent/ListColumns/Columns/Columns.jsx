// import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
// import More from './ContentHeader/More'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCard from './ListCard/ListCard'
import { mapOrder } from '~/utils/sorts'

const COLLUM_HEADER_HEIGHT = ( theme ) => theme.trello.collum_header_height
const COLLUM_FOOTER_HEIGHT = ( theme ) => theme.trello.collum_footer_height
// const COLLUM_CONTENT_HEIGHT = ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px - ${COLLUM_HEADER_HEIGHT} - ${COLLUM_FOOTER_HEIGHT} - 16px - 16px)`
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Columns( { column } ) {
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: column._id,
    data: { ... column }
  })
  const DndKitStyle = {
    // toachAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition
  }
  return (
    <Box
      ref = {setNodeRef}
      style = {DndKitStyle}
      {...attributes}
      {...listeners}
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        height: 'fit-content',
        bgcolor : (theme) => { return theme.palette.mode == 'dark' ? '#434343' : '#eee' },
        ml: 1,
        mt: 2,
        borderRadius: '6px',
        maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
      }
      }>
      {/* Header */}
      <Box sx = {{
        height: COLLUM_HEADER_HEIGHT,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px:2
      }}>
        <Typography variant = "h6"
          sx={{
            fontSize: '1rem'
          }}>
          {column?.title}
        </Typography>


      </Box>

      {/* Content */}

      <ListCard
        cards = {orderedCards}
      ></ListCard>

      { /* Footer */ }

      <Box sx = {{
        height: COLLUM_FOOTER_HEIGHT,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px:2
      }}>
        <Button
          startIcon = {<AddBoxIcon/>}
        > Add new card </Button>

        <Tooltip
          title = "Drag to move">
          <DragHandleIcon sx= {{ cursor: 'pointer' }}></DragHandleIcon>
        </Tooltip>
      </Box>

    </Box>
  )
}

export default Columns