import { createTheme } from '@mui/material/styles';


export function buildTheme() {
  const theme = createTheme({
    spacing: 4,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // Styles for buttons
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          primary: {
            backgroundColor: '#fff',
            color: '#1d1d1d',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: '#E5E5E5',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#474B4F',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#222629',
          },
        },
      },
    },
    typography: {
      fontFamily: ['Lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      h1: {
        fontFamily: 'Montserrat',
        fontSize: '48px',
        fontWeight: 600,
      },
      body1: {
        fontFamily: 'Lato',
        fontSize: '16px',
      },
    },
  });

  return theme;
}


