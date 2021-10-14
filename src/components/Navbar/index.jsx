import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logoRectangle from '../../assets/logo-rectangle.svg';
import LogoSmall from '../../assets/logo-small.svg';
import styles from './styles';

const Links = [
  { name: 'Home', value: '/', external: false },
  { name: 'Github', value: 'https://github.com/ufrpe-devs', external: true },
  {
    name: 'Discord',
    value: '/discord',
    external: false,
  },
];

const NavLink = ({ link, external, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'colors.brand.secondary',
    }}
    href={link}
    target={external ? '_blank' : '_self'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <Box px={4} __css={styles}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <HStack spacing={8} alignItems={'center'}>
            <img
              src={logoRectangle}
              className="navbar__logo navbar__logo--desktop"
              alt="logo"
            />
            <img
              src={LogoSmall}
              className="navbar__logo navbar__logo--mobile"
              alt="logo"
            />
          </HStack>
          <Flex alignItems={'center'} className="navbar__nav">
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(({ name, value, external }) => (
                <NavLink key={value} link={value} external={external}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <hr />
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ name, value, external }) => (
              <NavLink key={value} link={value} external={external}>
                {name}
              </NavLink>
            ))}
          </Stack>
          <hr />
        </Collapse>
      </Box>
    </>
  );
}
