import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = extendTheme({
  trello:{
    appBarHeight: APP_BAR_HEIGHT,
    appHeaderHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    }
  },
  components: {
    MuiCssBaseline:{
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width: '4px',
            height: '4px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#666',
            borderRadius: '2px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: '#888'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root:{
          textTransform: 'none'
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root:{
          '&.MuiTypography-body1': {
            fontSize: '0.875rem'
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root:{
          fontSize: '0.875rem'
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
              }
            }
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme
