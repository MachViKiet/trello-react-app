import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Cards( { card } ) {
  const shouldsShowCardAction = () => {
    return !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length
  }

  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px #333',
      overflow: 'unset'
    }}>
      {card?.cover &&
            <CardMedia sx={{ height: 140 }} image= {card?.cover} />}
      <CardContent sx = {{
        p: 1.5,
        '&:last-child' :{
          p: 1.5
        } }}>
        <Typography>
          {card?.title}
        </Typography>
      </CardContent>
      {shouldsShowCardAction() &&
        <CardActions sx = {{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
              <Button
                size="small"
                startIcon = {<GroupAddIcon/>}
              >{card?.memberIds?.length}</Button>}
          {!!card?.comments?.length &&
              <Button
                size="small"
                startIcon = {<ChatBubbleOutlineIcon/>}
              >{card?.comments?.length}</Button>}
          {!!card?.attachments?.length &&
              <Button
                size="small"
                startIcon = {<AttachmentIcon/>}
              >{card?.attachments?.length}</Button>}
        </CardActions>
      }
    </MuiCard>
    // <Card sx={{
    //   cursor: 'pointer',
    //   boxShadow: '0 1px 1px #333',
    //   overflow: 'unset'
    // }}>
    //   <CardContent sx = {{
    //     p: 1.5,
    //     '&:last-child' :{
    //       p: 1.5
    //     } }}>
    //     <Typography>
    //     Lizard
    //     </Typography>
    //   </CardContent>
    // </Card>
  )
}

export default Cards