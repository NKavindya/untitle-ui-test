import { PaletteOptions } from '@mui/material/styles';

// Color palette matching the Figma design
const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1E88E5',
    light: '#64B5F6',
    dark: '#1565C0',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#FF9800',
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#D32F2F'
  },
  warning: {
    main: '#FFC107',
    light: 'rgba(255, 193, 7, 0.2)',
    dark: '#F57C00',
    contrastText: '#FF9800'
  },
  info: {
    main: '#0288D1'
  },
  success: {
    main: '#2E7D32'
  },
  background: {
    default: '#F5F7FB',
    paper: '#FFFFFF'
  },
  text: {
    primary: '#212121',
    secondary: '#757575'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  }
};

export default palette;
