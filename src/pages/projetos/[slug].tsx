import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { client } from '../../../lib/prismic'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import {
  HeaderBackground,
  ContentContainer,
  ProjectImage,
  ProjectInfo,
  SubHeading,
  Tech
} from '../../styles/pages/Project'
import Button from '../../components/Button'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

interface IProjectProps {
  project: Document
}

const Project: NextPage<IProjectProps> = ({ project }) => {
  const [techs, setTechs] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1200px)')
    if (mql.matches) {
      setIsMobile(true)
    }
    if (!mql.matches) {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    setTechs(PrismicDOM.RichText.asText(project.data.techs).trim().split(','))
    console.log('done')
  }, [project.data.techs])
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <HeaderBackground>
        <Image
          src="/guilherme-doval-about-bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </HeaderBackground>
      <ContentContainer>
        <ProjectImage>
          <Image
            src={project.data.featured_image.url}
            alt={`Imagem do projeto ${PrismicDOM.RichText.asText(
              project.data.title
            )}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="projectOverlay">
            <Image
              className="logoImg"
              src={project.data.logo.url}
              alt={`Imagem do projeto ${PrismicDOM.RichText.asText(
                project.data.title
              )}`}
              // layout="fill"
              // objectFit="contain"
              layout="fixed"
              width={
                isMobile
                  ? project.data.logo.dimensions.width / 1.5
                  : project.data.logo.dimensions.width * 1.5
              }
              height={
                isMobile
                  ? project.data.logo.dimensions.height / 1.5
                  : project.data.logo.dimensions.height * 1.5
              }
            />
          </div>
        </ProjectImage>
        <ProjectInfo>
          <div>
            <SubHeading>Sobre</SubHeading>
            <p>{PrismicDOM.RichText.asText(project.data.description)}</p>
            {project.data.live_link.url && (
              <Button href={project.data.live_link.url} newTab>
                Acessar
              </Button>
            )}
            {project.data.github_link.url && (
              <Button href={project.data.github_link.url} newTab>
                Ver código
              </Button>
            )}
          </div>
          <div>
            <SubHeading>Tecnologias</SubHeading>
            {techs.map(tech => (
              <Tech key={tech}>{tech}</Tech>
            ))}
          </div>
        </ProjectInfo>
      </ContentContainer>
      <Footer />
    </motion.div>
  )
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await client().query([
    Prismic.Predicates.at('document.type', 'project')
  ])

  const paths = projects.results.map(project => {
    return {
      params: { slug: project.uid }
    }
  })

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps<IProjectProps> = async context => {
  const { slug } = context.params

  const project = await client().getByUID('project', String(slug), {})

  return {
    props: { project },
    revalidate: 60
  }
}
