import ListColumn from './ListColumns/ListColumn'
import { Box } from '@mui/material'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import {
  // PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor
} from '@dnd-kit/core'
function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  // const pointerSensor = useSensor(PointerSensor,
  //   { activationConstraint: {
  //     distance: 10
  //   } })
  const mousesensor = useSensor(MouseSensor,
    { activationConstraint: {
      distance: 10
    } })
  const touchsensor = useSensor(TouchSensor,
    { activationConstraint: {
      dalay: 250,
      tolerance: 5
    } })
  const Mysensors = useSensors(mousesensor, touchsensor)

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumns(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) { return }
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex( c => c._id === active.id)
      const newIndex = orderedColumns.findIndex( c => c._id === over.id)

      // Sắp xếp lại array columns
      const dndOrderedColumns = arrayMove( orderedColumns, oldIndex, newIndex )

      // Ghi lại API
      // const dndOrderedColumnsids = dndOrderedColumns.map(c => c._id)

      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd= {handleDragEnd} sensors={Mysensors}>
      <Box
        sx={{
          background: (theme) => { return theme.palette.mode == 'dark' ?
            'url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)':
            'url(https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80)'
          },
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: ( theme ) => theme.trello.boardContentHeight,
          pb: '10px'
        }}
      >
        <ListColumn columns = {orderedColumns /*{board?.columns}*/}
        ></ListColumn>
        {/* <Box>{orderedColumns}</Box> */}
      </Box>
    </DndContext>
  )
}

export default BoardContent
