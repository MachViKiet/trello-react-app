import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Workspaces from './Workspaces'
import Recent from './Recent'
import Templates from './Templates'
import Starred from './Starred'

// npm uninstall @mui/material @emotion/react @emotion/styled

function More () {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button
        sx={{ color : '#fff' }}
        id="basic-button-templates.jsx"
        aria-controls={open ? 'basic-menu-templates.jsx' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon= {<ExpandMoreIcon/>}
      >
      </Button>
      <Menu
        id="basic-menu-templates.jsx"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-templates.jsx'
        }}
        sx = {{
          '& .MuiList-root':{
            bgcolor: '#2d98da'
          }
        }}
      >

        <Workspaces isIcon = {false} />
        <Recent isIcon = {false} />
        <Starred isIcon = {false} />
        <Templates isIcon = {false} />

      </Menu>
    </Box>
  )
}

export default More
