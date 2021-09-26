import React from 'react';
import { Box } from '@chakra-ui/react';

import astronautLogo from '../../assets/astronaut-logo.svg';
import styles from './styles';

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      bg="brand.primary"
      p={4}
      ml={0}
      mr={0}
      __css={styles}
    >
      <Box display="flex" alignItems="center" className="footer__container">
        <Box className="footer__container item">
          <img src={astronautLogo} alt="astronault logo" />
        </Box>
        <Box flex={1} color="white" className="footer__container item">
          <Box>
            <p>© 2019 - 2021 UFRPE Devs</p>
            <p>Edf. Vasconcelos Sobrinho (CEAGRI II) - UFRPE</p>
            <p>Praça Farias Neves, 2 - Dois Irmãos, Recife - PE</p>
            <br />
            <p>
              A comunidade UFRPE Devs não integra nem representa oficialmente a
              Universidade Federal Rural de Pernambuco
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
