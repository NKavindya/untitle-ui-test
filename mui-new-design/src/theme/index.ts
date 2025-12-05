import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFC107', // Yellow accent
      light: '#FFECB3',
      dark: '#FFA000',
      contrastText: '#000',
    },
    background: {
      default: '#F5F5F5', // Light beige/yellowish background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '0.95rem',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 193, 7, 0.2)',
            color: '#FF9800',
            '&:hover': {
              backgroundColor: 'rgba(255, 193, 7, 0.25)',
            },
          },
        },
      },
    },
  },
});

export default theme;



