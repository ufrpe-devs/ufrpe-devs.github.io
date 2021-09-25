import { Box } from '@chakra-ui/react';

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Template({ children }) {
  return (
    <Box
      id="aaa"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
