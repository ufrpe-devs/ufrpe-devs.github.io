import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Navbar, Footer } from './components'

export default function Page({ children }) {
  return (
    <>
      <Container maxW="container.xl" p={"4vh 0"} id="container">
        <Navbar />
        {children}
      </Container>
      <Footer/>
    </>
    
  )
}
