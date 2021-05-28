import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import SEO from '../components/SEO'

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
      <SEO
        title="Contato"
        image="guilherme-doval-thumbnail.jpg"
        description="Desenvolvedor front-end especialista no desenvolvimento de sites responsivos e elegantes para a web moderna."
      />

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
    </motion.div>
  )
}

export default Contact
