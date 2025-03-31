"use client"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#131414',
        },
        secondary: {
          main: '#47D16E',
        },
        background: {
          default: '#171718',
          paper: '#1F1F21',
        },
        text: {
          primary: '#FFFFFF',
        },

      }
    })

export default theme;