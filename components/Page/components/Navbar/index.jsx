import { LogoRectangle } from "../../../../images"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useMediaQuery,
  Slide,
  Collapse,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from "react";
import { theme } from "../../../../styles/theme";
const Links = ['Home', 'About us', 'Projects', "Community"];

const handleClickScroll = (event, title) => {
  let anchorTitle = title.replace(" ", "-").toLowerCase()
  const yOffset = -10; 
  const element = document.getElementById(anchorTitle);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
};

const NavLink = (props) => {
  const { children, ...otherProps } = props
  return (
    <Button
      px={5}
      py={1} 
      color={theme.colors.brand.tertiary}
      variant="link"
      _hover={{
        textDecoration: 'none',
        color: '#00AAFC',
      }}
      onClick={e => handleClickScroll(e, children)}
    >
      {children}
   </Button>
  )
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTinyThan767] = useMediaQuery("(max-width: 767px)")

  useEffect(() => {
    if(isTinyThan767) {
      document.getElementById("main-logo-rectangle").setAttribute("width", 125)
      document.getElementById("main-logo-rectangle").setAttribute("viewBox", "0 0 20 170")
      return
    } 
    document.getElementById("main-logo-rectangle").setAttribute("width", 228)
    document.getElementById("main-logo-rectangle").setAttribute("viewBox", "0 0 1020 170")

  }, [isTinyThan767])

  return (
    <>
      {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}> */}
      <Box px={4} position="sticky" top="0" bg="white" zIndex="1000">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen }
          />
          <HStack spacing={8} alignItems={'center'}>
          
          <LogoRectangle id="main-logo-rectangle" />
            
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              ml={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button> */}
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <hr/>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
          <hr/>
        </Collapse>
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
