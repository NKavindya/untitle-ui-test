import { PaletteOptions } from '@mui/material/styles';

// NOTE: These values should be adjusted to match the exact Figma tokens
// once the Figma API rate limiting allows full inspection.

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1E88E5',
    light: '#64B5F6',
    dark: '#1565C0',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#7B1FA2',
    light: '#BA68C8',
    dark: '#4A148C',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#D32F2F'
  },
  warning: {
    main: '#ED6C02'
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
  grey: {
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





