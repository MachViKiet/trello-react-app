// import React from 'react'
import { Box, Button } from '@mui/material'
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate'
// import More from './ContentHeader/More'

// const COLLUM_HEADER_HEIGHT = '50px'
// const COLLUM_FOOTER_HEIGHT = '50px'
// const COLLUM_CONTENT_HEIGHT = ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px - ${COLLUM_HEADER_HEIGHT} - ${COLLUM_FOOTER_HEIGHT} - 16px - 16px)`
import Columns from './Columns/Columns'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumn({ columns }) {
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track':{
          m: 2
        }
      }}>
        { columns?.map((column) => {
          return <Columns
            key = { column._id }
            column = { column }
          />
        }) }

        <Box
          sx = {{
            minWidth: '300px',
            maxWidth: '300px',
            height: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            ml: 1,
            // mr: 1,
            mt: 2,
            bgcolor: '#ffffff3d',
            borderRadius: '6px',
            maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
          }}>
          <Button
            sx = {{
              width: '100%',
              height: '100%',
              py: 1
            }}
            startIcon={<ControlPointDuplicateIcon/>}>Add new collumn</Button>
        </Box>

      </Box>
    </SortableContext>

  )
}

export default ListColumn