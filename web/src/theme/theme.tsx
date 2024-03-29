import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    success: {
      main: colors.mediumGray
    },
    background: {
      paper: colors.lightGray
    },
    text: {
      primary: colors.primary
    },
    action: {
      disabledBackground: colors.secondary
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontWeightBold: 600,
    h1: {
      fontSize: 36,
      marginBottom: '15px',
      lineHeight: 1.2
    },
    h2: {
      fontSize: 32,
      marginBottom: '30px',
      lineHeight: 1.4
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.4,
      marginBottom: 30
    },
    h4: {
      fontSize: 18,
      marginBottom: 21,
      lineHeight: 1.4
    },
    h5: {
      fontSize: 16,
      lineHeight: 1.4
    },
    h6: {
      fontSize: 20,
      marginBottom: '16px',
      lineHeight: 1.4
    },
    button: {
      textTransform: 'none'
    }
  }
});
