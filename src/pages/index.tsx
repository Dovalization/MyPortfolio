/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'

import {
  HeroSection,
  NameTitle,
  HeroSectionTitle,
  CardsContainer,
  Card,
  Title,
  FeaturedProjectsContainer,
  FeaturedProjectCard,
  FeaturedProjectContent,
  FeaturedProjectImageContainer,
  FeaturedProjectFooter
} from '../styles/pages/Home'
import { MdCreate, MdCode, MdBackup } from 'react-icons/md'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import NavBar from '../components/Navbar'
import Image from 'next/image'
import theme from '../styles/theme'

import { client } from '../../lib/prismic'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

interface IHomeProps {
  featuredProjects: Document[]
}

const Home: NextPage<IHomeProps> = ({ featuredProjects }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 991px)')
    if (mql.matches) {
      setIsMobile(true)
    }
    if (!mql.matches) {
      setIsMobile(false)
    }
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <NavBar />
      <HeroSection>
        <Image
          src="/guilherme-doval-home-herosec.jpg"
          layout="fill"
          objectFit="cover"
        />
        <HeroSectionTitle>Desenvolvedor Web</HeroSectionTitle>
        <NameTitle>
          "Tornando a web um lugar mais elegante e acessível"
        </NameTitle>
      </HeroSection>
      <CardsContainer>
        <Card>
          <MdCreate size={100} color={theme.colors.primary} />
          <strong>Design</strong>
        </Card>
        <Card>
          <MdCode size={100} color={theme.colors.primary} />

          <strong>Code</strong>
        </Card>
        <Card>
          <MdBackup size={100} color={theme.colors.primary} />

          <strong>Deploy</strong>
        </Card>
      </CardsContainer>
      <FeaturedProjectsContainer>
        <Title>Projetos em Destaque</Title>
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id}>
            {index % 2 !== 0 && !isMobile ? (
              <FeaturedProjectContent layout="main">
                <div>
                  <h2>{PrismicDOM.RichText.asText(project.data.title)}</h2>
                  <p>{PrismicDOM.RichText.asText(project.data.description)}</p>
                </div>
                <FeaturedProjectImageContainer>
                  <Image
                    src={project.data.featured_image.url}
                    alt={`Imagem do projeto ${PrismicDOM.RichText.asText(
                      project.data.title
                    )}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </FeaturedProjectImageContainer>
              </FeaturedProjectContent>
            ) : (
              <FeaturedProjectContent layout="alternate">
                <FeaturedProjectImageContainer>
                  <Image
                    src={project.data.featured_image.url}
                    alt={`Imagem do projeto ${PrismicDOM.RichText.asText(
                      project.data.title
                    )}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </FeaturedProjectImageContainer>
                <div>
                  <h2>{PrismicDOM.RichText.asText(project.data.title)}</h2>
                  <p>{PrismicDOM.RichText.asText(project.data.description)}</p>
                </div>
              </FeaturedProjectContent>
            )}

            <FeaturedProjectFooter>
              {project.data.live_link.url && (
                <Link href={project.data.live_link.url} passHref>
                  <a target="_blank">
                    <FiExternalLink size={32} color="#fff" />
                  </a>
                </Link>
              )}

              {project.data.github_link.url && (
                <Link href={project.data.github_link.url} passHref>
                  <a target="_blank">
                    <FiGithub size={32} color="#fff" />
                  </a>
                </Link>
              )}
            </FeaturedProjectFooter>
          </FeaturedProjectCard>
        ))}
        <Button href="/projetos"> Ver todos os projetos</Button>
      </FeaturedProjectsContainer>
      <Footer />
    </motion.div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<IHomeProps> = async context => {
  const featuredProjects = await client().query([
    Prismic.Predicates.at('document.tags', ['featured'])
  ])

  return {
    props: { featuredProjects: featuredProjects.results },
    revalidate: 60
  }
}
