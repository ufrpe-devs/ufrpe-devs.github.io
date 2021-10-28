import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

import theme from './styles/theme';
import Layout from './components/layout';

export const pageWrapper = ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ChakraProvider theme={theme}>
        <Layout>{element}</Layout>
      </ChakraProvider>
    </>
  );
};
