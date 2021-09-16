import Head from 'next/head'
import { Navbar } from './components'

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
    
  )
}
