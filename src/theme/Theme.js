import { createTheme } from "@mui/material";

const font_family = "Rubik";


const white = '#ffffff';
const black = '#000000';
const redPrimary = '#7a0018';
const contrastRedPrimary = "#FFF0F3";
const redSecondary = "#97262d";
const blueBackground = '#1B3F6C';
const greenMain = '#4a934a';
const greenDark = '#008000';
const redError = "#Dc2323";

const boxShadow = {
  container: '0px 4px rgba(0,0,0,0.25)',
};

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,   // extra-small
      sm: 300, // small (mobile)
      md: 768, // medium (tablet)
      lg: 1024, // large (laptop)
      xl: 1440, // extra-large (desktop)
    }
  },
})

export const theme = createTheme({
  spacing: 4,
  breakpoints: {
    ...defaultTheme.breakpoints
  },
  palette: {
    primary: {
      light: `${redPrimary}`,
      main: `${redPrimary}`,
      dark: `${redPrimary}`,
      contrastText: `${contrastRedPrimary}`,
    },
    secondary: {
      light: `${redSecondary}`,
      main: `${redSecondary}`,
      dark: `${redSecondary}`,
      contrastText: `${white}`,
    },
    white: {
      light: `${white}`,
      main: `${white}`,
      dark: `${white}`,
      contrastText: `${black}`,
    },
    success: {
      light: `${greenMain}`,
      main: `${greenMain}`,
      dark: `${greenDark}`,
      contrastText: `${white}`,
    },
    error:{
      main: `${redError}`,
      contrastText: `${white}`
    },
    background: {
      primary: `${redPrimary}`,
      secondary: `${redSecondary}`,
      gradient: `${blueBackground}`,
      white: `${white}`,
      success: `${greenMain}`,
      boxShadow: `${boxShadow.container}`,
      // borderColor:`${redSecondary}`
    },
    text: {
      // ...defaultTheme.palette.text,
      primary: `${redPrimary}`,
      success: `${greenMain}`,
      white: `${contrastRedPrimary}`
    },
  },
  typography: {
    // ...defaultTheme.typography,
    fontFamily: `${font_family}`,
    h3: {
      fontSize: '40px',
      lineHeight: '52px',
      fontWeight: '700',
      letterSpacing: '0.3px',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '24px',
        ineHeight: '36px',
      },
    },
    h4: {
      fontSize: '36px',
      lineHeight: '34px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '30px',
      },
    },
    h5: {
      fontSize: '32px',
      lineHeight: '26px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    h6: {
      fontSize: '28px',
      fontWeight: '500',
      lineHeight: '26px',
      letterSpacing: '0',

      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '18px',
        lineHeight: '20px',
      },
    },
    body1: {
      fontSize: '24px',
      lineHeight: 'normal',
      letterSpacing: '0',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '18px',
      },
    },
    body2: {
      fontSize: '20px',
      lineHeight: 'normal',
      letterSpacing: '0',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '16px'
      }
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: 'normal',
      letterSpacing: '0',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '14px'
      }
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: 'normal',
      letterSpacing: '0',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '12px'
      }
    },
    //   subtitle2: {
    //     fontSize: '12px',
    //     lineHeight: 'normal',
    //     letterSpacing: '0',
    //   }
  }
});



// const themeDark 