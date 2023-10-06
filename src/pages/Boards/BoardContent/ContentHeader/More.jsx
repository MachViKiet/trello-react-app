import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

export default function More() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          p: 0,
          minWidth: '0px'
        }}
      >
        <MoreHorizIcon></MoreHorizIcon>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <LibraryAddIcon/>
          </ListItemIcon>
          Add new card
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>list 1</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>list 2</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Delete card</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  )
}