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
  Collapse
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from "react";
const Links = ['Home', 'About us', 'Projects', "Community"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: '#00AAFC'
    }}
    href={'#'}
  >
    {children}
  </Link>
);

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
      <Box px={4}>
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
