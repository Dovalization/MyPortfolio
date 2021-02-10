import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import {
  HeaderBackground,
  ContentContainer,
  Heading
} from '../styles/pages/Contact'
const Contact: NextPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <HeaderBackground>
        <Image
          src="/guilherme-doval-contact-bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </HeaderBackground>
      <ContentContainer>
        <Heading>Contato</Heading>
        <Form />
      </ContentContainer>
      <Footer />
    </motion.div>
  )
}

export default Contact
