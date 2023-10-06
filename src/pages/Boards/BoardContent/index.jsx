// import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import More from './ContentHeader/More'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import DragHandleIcon from '@mui/icons-material/DragHandle'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLLUM_HEADER_HEIGHT = '50px'
const COLLUM_FOOTER_HEIGHT = '50px'
const COLLUM_CONTENT_HEIGHT = ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px - ${COLLUM_HEADER_HEIGHT} - ${COLLUM_FOOTER_HEIGHT} - 16px - 16px)`

function BoardContent() {
  return (
    <Box
      sx={{
        background: (theme) => { return theme.palette.mode == 'dark' ?
          'url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)':
          'url(https://4kwallpapers.com/images/wallpapers/abstract-background-iphone-14-stock-1280x720-8614.jpg)'
        },
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: ( theme ) => theme.trello.boardContentHeight,
        pb: '16px'
      }}
    >

      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          bgcolor : '#eee',
          ml: 1,
          // mr: 1,
          mt: 2,
          borderRadius: '6px',
          maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
        }}>
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
            Team Member Topic
            </Typography>

            <More></More>

          </Box>

          {/* Content */}
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

            <Card sx={{
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
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

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

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          bgcolor : '#eee',
          ml: 1,
          // mr: 1,
          mt: 2,
          borderRadius: '6px',
          maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
        }}>
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
            Team Member Topic
            </Typography>

            <More></More>

          </Box>

          {/* Content */}
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

            <Card sx={{
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
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

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

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          bgcolor : '#eee',
          ml:2,
          mt: 2,
          borderRadius: '6px',
          maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
        }}>
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
            Team Member Topic
            </Typography>

            <More></More>

          </Box>

          {/* Content */}
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

            <Card sx={{
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
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

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

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          bgcolor : '#eee',
          ml:2,
          mt: 2,
          borderRadius: '6px',
          maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
        }}>
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
            Team Member Topic
            </Typography>

            <More></More>

          </Box>

          {/* Content */}
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

            <Card sx={{
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
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

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

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          bgcolor : '#eee',
          ml:2,
          mt: 2,
          borderRadius: '6px',
          maxHeight: ( theme ) => `calc(${theme.trello.boardContentHeight} - 16px - 16px)`
        }}>
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
            Team Member Topic
            </Typography>

            <More></More>

          </Box>

          {/* Content */}
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

            <Card sx={{
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
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px #000',
              overflow: 'unset'
            }}>
              <CardContent>
                <Typography >
          Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

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

      </Box>


    </Box>
  )
}

export default BoardContent
