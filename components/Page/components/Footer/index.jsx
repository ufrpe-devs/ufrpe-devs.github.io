import { Box, Grid, SimpleGrid, Stack, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react'
import { AstronautLogo, HackClub } from '../../../../images';
import { theme } from '../../../../styles/theme';

const FooterLarge = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box style={{width: 'auto !important'}}>
        <AstronautLogo />
      </Box>
      <Box flex={1} ml={6} color="white">
        <Box >
          <Box>© 2019 - 2021 UFRPE Devs</Box>
          <Box>Edf. Vasconcelos Sobrinho (CEAGRI II) - UFRPE</Box>
          <Box>Praça Farias Neves, 2 - Dois Irmãos, Recife - PE</Box>
          <br/>
          <Box>A comunidade UFRPE Devs não integra nem representa oficialmente a Universidade Federal Rural de Pernambuco</Box>
        </Box>
      </Box>
      <Box >
        <HackClub />
      </Box>
    </Box>
  )
}

const TinyFooter = () => {
  return (
    <SimpleGrid columns={1}>
      <Box style={{width: 'auto !important', textAlign: 'center'}}>
        <AstronautLogo style={{margin: 'auto', marginBottom: 20}} />
      </Box>
      <Box flex={1} ml={6} color="white">
        <Box >
          <Box>© 2019 - 2021 UFRPE Devs</Box>
          <Box>Edf. Vasconcelos Sobrinho (CEAGRI II) - UFRPE</Box>
          <Box>Praça Farias Neves, 2 - Dois Irmãos, Recife - PE</Box>
          <br/>
          <Box>A comunidade UFRPE Devs não integra nem representa oficialmente a Universidade Federal Rural de Pernambuco</Box>
        </Box>
      </Box>
      <Box >
        <HackClub style={{margin: '40px auto'}}/>
      </Box>
    </SimpleGrid>
  )
}

export default function Footer() {
  const [isTinyThan992] = useMediaQuery("(max-width: 992px)")

  return (
    <Box as="footer" role="contentinfo" bg={theme.colors.brand.primary} p={isTinyThan992? 0: "6"} ml={0} mr={0}>
      {isTinyThan992?
        <TinyFooter/>
      :
        <FooterLarge/>
      }
    </Box>
  );
}
