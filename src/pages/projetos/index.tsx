import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import SEO from '../../components/SEO'
import {
  HeaderBackground,
  ContentContainer,
  Heading,
  ProjectsSection,
  Project
} from '../../styles/pages/Works'

import { client } from '../../../lib/prismic'

import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import { GetStaticProps, NextPage } from 'next'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

interface IWorksProps {
  projects: Document[]
}

const Works: NextPage<IWorksProps> = ({ projects }) => {
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

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SEO
        title="Projetos"
        image="guilherme-doval-thumbnail.jpg"
        description="Desenvolvedor front-end especialista no desenvolvimento de sites responsivos e elegantes para a web moderna."
      />

      <HeaderBackground>
        <Image
          src="/guilherme-doval-works-bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </HeaderBackground>
      <ContentContainer>
        <Heading>Projetos</Heading>
        <ProjectsSection>
          {projects.map(project => (
            <Link key={project.id} href={`/projetos/${project.uid}`} passHref>
              <a>
                <Project>
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
                          : project.data.logo.dimensions.width
                      }
                      height={
                        isMobile
                          ? project.data.logo.dimensions.height / 1.5
                          : project.data.logo.dimensions.height
                      }
                    />
                  </div>
                </Project>
              </a>
            </Link>
          ))}
        </ProjectsSection>
      </ContentContainer>
    </motion.div>
  )
}

export default Works

export const getStaticProps: GetStaticProps<IWorksProps> = async () => {
  const projects = await client().query([
    Prismic.Predicates.at('document.type', 'project')
  ])

  return {
    props: { projects: projects.results },
    revalidate: 10
  }
}
