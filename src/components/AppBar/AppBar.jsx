// import React from 'react'
import ModeSelect from '../ModeSelect'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import AppIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import Workspaces from './Menu/Workspaces'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Recent from './Menu/Recent'
import More from './Menu/More'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import Profiles from './Menu/Profiles'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'

import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

// import theme from '~/theme'

function AppBar() {

  const [searchValue, setsearchValue] = useState('')

  return (
    <Box px={ 2 } sx = {{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: { xs: '2', md: '7' },
      overflowY : 'auto',
      bgcolor: (theme) => { return theme.palette.mode == 'dark' ? '#2c3e50' : '#3867d6' }
    }}>

      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppIcon sx={{ color: '#fff' }}></AppIcon>
        <Box sx = {{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={ trelloIcon } inheritViewBox sx={{ color: '#fff' }}/>
          <Typography variant = "span" sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }}>Trello</Typography>
        </Box>

        {/* dropdown menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />

          <Button
            variant="outlined"
            startIcon = {<AddToPhotosIcon />}
            sx={{ padding: '5px 23px', color : '#fff', borderColor: '#fff',
              '&:hover':{
                borderColor: '#ccc'
              } }}>Create</Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <More />
        </Box>

      </Box>

      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search "
          type="text"
          size='small'
          value = {searchValue}
          onChange= {( e ) => {
            setsearchValue(e.target.value)
          }}
          sx={{
            minWidth: '180px',
            display: { xs: 'none', md: 'flex' },
            '& label':{
              color: '#fff'
            },
            '& input':{
              color: '#fff'
            },
            '& label.Mui-focused':{
              color: '#fff'
            },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{
                borderColor: '#fff'
              },
              '&:hover fieldset':{
                borderColor: '#fff'
              },
              '&.Mui-focused fieldset':{
                borderColor: '#fff'
              }
            }
          } }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx = {{ color: '#fff', fontSize: 'medium' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon sx={{
                display : searchValue === '' ? 'none' : 'block',
                fontSize: 'small',
                color: '#fff',
                cursor: 'pointer'
              }}
              onClick = {() => {
                setsearchValue('')
              }}></CloseIcon>
            )
          }}
        />


        <ModeSelect
          color = '#fff' />

        <Tooltip>
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: '#fff' }}/>
          </Badge>
        </Tooltip>

        <HelpOutlineIcon sx={{ color: '#fff', cursor: 'pointer' }}/>

        <Profiles></Profiles>
      </Box>

    </Box>
  )
}

export default AppBar