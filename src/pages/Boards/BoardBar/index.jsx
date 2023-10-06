// import React from 'react'
import { Box } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FilterIcon from '@mui/icons-material/Filter'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import DownloadIcon from '@mui/icons-material/Download'
import PublicIcon from '@mui/icons-material/Public'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

const MENU_STYLE = {
  color: '#fff',
  border: 'none',
  paddingX: '5px'
}

function BoardBar() {
  return (
    <Box
      px={ 2 }
      sx={{
        bgcolor: (theme) => { return theme.palette.mode == 'dark' ? '#1e272e' : '#4b7bec' },
        width: '100%',
        height: (theme) => theme.trello.appHeaderHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'auto',
        borderTop: '1px solid #84817a',
        borderBottom: '2px solid #fff',
        gap: 2
      }}
    >
      <Box py = {1} sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon = {<PublicIcon color='red' />} label = "Public"
          clickable
          sx= {MENU_STYLE} />

        <Chip
          icon = {<DashboardIcon color='#fff' />} label = "Public"
          clickable
          sx= {MENU_STYLE} />

        <Chip
          icon = {<DownloadIcon color='#fff' />} label = "Download"
          clickable
          sx= {MENU_STYLE} />

        <Chip
          icon = {<FilterIcon color='#fff' />} label = "Filter"
          clickable
          sx= {MENU_STYLE} />

        <Chip
          icon = {<AddToDriveIcon color='#fff' />} label = "Add To Drive"
          clickable
          sx= {MENU_STYLE} />

      </Box>

      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined"
          startIcon = {<GroupAddIcon/>}
          sx={{
            minWidth: '150px',
            color: '#fff',
            borderColor: '#fff',
            '&:hover':{
              borderColor: '#ccc'
            }
          }}>Invite people</Button>
        <AvatarGroup max={3}
          sx={{
            '& .MuiAvatar-root':{
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none'
            }
          }}>
          <Tooltip>
            <Avatar alt="Temy Sharp"

              src="https://vapa.vn/wp-content/uploads/2022/12/anh-avatar-facebook-dep-001.jpg" />
          </Tooltip>

          <Tooltip>
            <Avatar alt="Temy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLf2JxJWMA-V3aOx79vE1a7sep76ollsGNxgLZVCivG0VKXr5lZfKVwHwa134o2Qf8XQ&usqp=CAU" />
          </Tooltip>

          <Tooltip>
            <Avatar alt="Temy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9gbvYZ-tZWOQz3cMle0d1v0OzAWEAg3huHdJFlQz0aL06hikWybEOmeu0Dfbxo6ZnA4&usqp=CAU" />
          </Tooltip>
          <Tooltip>
            <Avatar alt="Temy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdYVkFLcvnB-WUUIVv1SiaWdtMZX6voYml9il3CKswXxBQ8jnDd2gkmEEhD2MpIVJRrk&usqp=CAU" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar