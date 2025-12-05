import { TypographyOptions } from '@mui/material/styles/createTypography';

// Typography styles will be updated to match exact Figma design
const typography: TypographyOptions = {
  fontFamily: ['Inter', 'Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(
    ','
  ),
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.25
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.3
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.3
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.35
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4
  },
  subtitle1: {
    fontSize: '0.95rem',
    fontWeight: 500,
    lineHeight: 1.4
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.4
  },
  body1: {
    fontSize: '0.95rem',
    fontWeight: 400,
    lineHeight: 1.5
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5
  },
  button: {
    fontSize: '0.9rem',
    fontWeight: 600,
    textTransform: 'none'
  }
};

export default typography;



