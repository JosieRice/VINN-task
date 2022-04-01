/**
 * Theme overrides for MUI
 * All of our default styles should go here
 */

 import { createTheme } from '@mui/material';

 const theme = createTheme({
     components: {
         MuiCssBaseline: {
             styleOverrides: `
                 h1 {
                     color: blue;
                 }
             `,
         },
     },
 });
 
 export default theme;
 