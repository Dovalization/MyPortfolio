import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Form from '../components/Form'
import SEO from '../components/SEO'
import contactBg from '../../public/guilherme-doval-contact-bg.jpg'
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
          src={contactBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
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
