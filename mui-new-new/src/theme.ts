import { createTheme } from '@mui/material/styles'

// Basic light theme tuned to resemble the REMS dashboard design
export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3f4f6',
      paper: '#ffffff',
    },
    primary: {
      main: '#1f4f9c',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    h5: {
      fontWeight: 500,
    },
    body2: {
      fontSize: 13,
    },
  },
  shape: {
    borderRadius: 10,
  },
})




