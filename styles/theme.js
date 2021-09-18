import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "inter",
        display: "flex",
        height: "100vh",
        width: "100vw",
      },

      "#__next": {
        width: '100%',
        position: 'relative'
      },

      "#container": {
        '@media screen and (max-width: 1320px)': {
          padding: "4vh 3vw",
        },
      },

      "#main-logo-rectangle": {
        cursor: 'pointer',
        transition: '0.5s opacity',
        _hover: {
          opacity: 0.9
        },
        '@media screen and (max-width: 767px)': {
          position: 'absolute',
          right: 0
        },
        '@media screen and (min-width: 767px)': {
          position: 'relative',
        },
      },

      "#community-home": {
        width: 'auto',
        height:' auto',
      },

      "#hero": {
        display: 'flex', 
        minHeight: '85vh',
        '@media screen and (max-width: 992px)': {
          marginTop: '20px',
          "#hero-community-button-1": {
            display: 'none'
          },
          "#hero-community-button-2": {
            display: 'block',
            width: 200,
            margin: 'auto'
          }
        },
        '@media screen and (min-width: 992px)': {
          "#hero-community-button-1": {
            display: 'block'
          },
          "#hero-community-button-2": {
            display: 'none'
          }
        },
      }
    }),
  },
  colors: {
    brand: {
      primary: '#122E4B',
      secondary: '#00AAFC',
      tertiary: '#718096',
    },
  },
});
