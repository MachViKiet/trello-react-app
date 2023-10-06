import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material'

function ModeSelect(progs) {
  const { mode, setMode } = useColorScheme()
  return (
    <Button sx={{ minWidth: '80px', color: `${progs.color}` }}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

export default ModeSelect