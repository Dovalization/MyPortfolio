import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { FormspreeProvider } from '@formspree/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FormspreeProvider project="1595681662014848281">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
        </AnimatePresence>
      </ThemeProvider>
    </FormspreeProvider>
  )
}

export default MyApp
