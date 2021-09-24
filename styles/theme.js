import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'inter',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        padding: '4vh 3vw',
        'div:first-child': {
          width: '100%',
          position: 'relative',
        },
      },
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
