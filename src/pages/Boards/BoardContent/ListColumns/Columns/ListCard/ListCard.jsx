// import React from 'react'
import { Box } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import { Card as MuiCard } from '@mui/material'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import GroupAddIcon from '@mui/icons-material/GroupAdd'
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
// import AttachmentIcon from '@mui/icons-material/Attachment'
import Cards from './Cards/Cards'
const COLLUM_CONTENT_HEIGHT = ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px - ${theme.trello.collum_footer_height} - ${theme.trello.collum_header_height} - 16px - 16px)`

function ListCard( { cards } ) {
  return (
    <Box
      sx = {{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        height: 'fit-content',
        maxHeight: COLLUM_CONTENT_HEIGHT,
        overflowY: 'auto',
        overflowX: 'hidden',
        p: '0 5px',
        m: '0 5px',

        '&::-webkit-scrollbar':{
          width: '4px',
          height: '4px'
        },
        '&::-webkit-scrollbar-thumb':{
          backgroundColor: '#ced0da',
          borderRadius: '2px'
        },
        '&::-webkit-scrollbar-thumb:hover':{
          backgroundColor: '#bfc2cf'
        }

      }}>


      {/* <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px #333',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://smartslider3.com/wp-content/uploads/2019/02/homepagesliders-780x410.png"
          title="green iguana"
        />
        <CardContent sx = {{
          p: 1.5,
          '&:last-child' :{
            p: 1.5
          } }}>
          <Typography>
        Lizard
          </Typography>
        </CardContent>
        <CardActions sx = {{ p: '0 4px 8px 4px' }}>
          <Button
            size="small"
            startIcon = {<GroupAddIcon/>}
          >20</Button>
          <Button
            size="small"
            startIcon = {<ChatBubbleOutlineIcon/>}
          >15</Button>
          <Button
            size="small"
            startIcon = {<AttachmentIcon/>}
          >12</Button>
        </CardActions>
      </MuiCard> */}

      { cards?.map((card) => {
        return <Cards
          key={card._id}
          card = {card}
        />
      })}

    </Box>
  )
}

export default ListCard