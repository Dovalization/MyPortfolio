import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'
import api from '../../lib/api'
import Navbar from '../components/Navbar'
import {
  HeaderBackground,
  ContentContainer,
  IntroSection,
  Heading,
  Quote,
  SectionsContainer,
  Section,
  SubHeading,
  Experience,
  Tech,
  RepositoriesContainer,
  Repository
} from '../styles/pages/About'

import {
  FiBriefcase,
  FiBook,
  FiCode,
  FiFile,
  FiGitBranch,
  FiChevronRight
} from 'react-icons/fi'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

interface IRepository {
  id: number
  full_name: string
  name: string
  description: string
}

interface IAboutProps {
  repositories: IRepository[]
}

const About: NextPage<IAboutProps> = ({ repositories }) => {
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
        <IntroSection>
          <div>
            <Heading>Sobre mim</Heading>
            <p>
              <strong>Desenvolvedor front-end</strong> especialista no
              desenvolvimento de
              <strong> sites responsivos e elegantes</strong> para a web
              moderna.
              <br />
              <br />
              Sou familiarizado com as tecnologias mais comuns da web como
              <strong> ReactJS e Node.</strong> Desenvolvo PWAs e tenho
              familiaridade com SSR e SSG. Também desenvolvo e consumo
              <strong> APIs REST</strong> regularmente.
              <br />
              <br />
              Desenvolvo aplicações com o foco em
              <strong> solucionar problemas de negócios </strong>
              com uma excelente <strong>experiência de usuário</strong>. Tenho
              um grande conhecimento sobre UX e princípios de usabilidade e os
              considero de alta importância para o<strong> sucesso</strong> de
              um projeto.
            </p>
            <Quote>
              O design centrado no ser humano é fundamentalmente uma afirmação
              da dignidade humana. É uma busca contínua do que pode ser feito
              para apoiar e fortalecer a dignidade das pessoas ao viver suas
              vidas em diversas circunstâncias sociais, econômicas, políticas e
              culturais.
              <span>Richard Buchanan</span>
            </Quote>
            <Button href="/guilherme_doval_cv.pdf" newTab>
              Download CV
            </Button>
          </div>
          <div>
            <Image
              src="/guilherme-doval-about-me.jpg"
              layout="intrinsic"
              height={550}
              width={550}
              alt="Fotografia de Guilherme Doval"
            />
          </div>
        </IntroSection>
        <hr />
        <SectionsContainer>
          <Section>
            <SubHeading>
              <FiBriefcase />
              <h2>Experiência</h2>
            </SubHeading>
            <Experience>
              <span>2020</span>
              <div>
                <strong>Desenvolvedor Web Freelancer</strong>
                <p>
                  Papori Get Social; <br />
                  Effective Branding.
                </p>
              </div>
            </Experience>
            <Experience>
              <span>2019</span>
              <div>
                <strong>Designer Gráfico/Web</strong>
                <p>UNIDCOM-IADE.</p>
              </div>
            </Experience>
          </Section>
          <Section>
            <SubHeading>
              <FiBook />
              <h2>Educação</h2>
            </SubHeading>
            <Experience>
              <span>2020</span>
              <div>
                <strong>Mestre em Design e Cultura Visual</strong>
                <p>IADE - Creative University</p>
              </div>
            </Experience>
            <Experience>
              <span>2017</span>
              <div>
                <strong>Tecnólogo em Jogos Digitais</strong>
                <p>UniRitter</p>
              </div>
            </Experience>
          </Section>
          <Section>
            <SubHeading>
              <FiCode />
              <h2>Tecnologias</h2>
            </SubHeading>
            <Tech>HTML</Tech>
            <Tech>CSS</Tech>
            <Tech>JavaScript</Tech>
            <Tech>ReactJS</Tech>
            <Tech>React Native</Tech>
            <Tech>Node.js</Tech>
            <Tech>TypeScript</Tech>
            <Tech>Express</Tech>
            <Tech>SQL</Tech>
            <Tech>Styled Components</Tech>
            <Tech>REST</Tech>
            <Tech>Git</Tech>
            <Tech>Docker</Tech>
          </Section>
          <Section>
            <SubHeading>
              <FiFile />
              <h2>Certificados</h2>
            </SubHeading>
            <Experience>
              <span>2020</span>
              <div>
                <strong>GoStack - Bootcamp</strong>
                <p>Rocketseat</p>
              </div>
            </Experience>
            <Experience>
              <span>2017</span>
              <div>
                <strong>Proficiência em Inglês</strong>
                <p>Cambridge Assessments English</p>
              </div>
            </Experience>
          </Section>
        </SectionsContainer>
        <RepositoriesContainer>
          <Section>
            <SubHeading>
              <FiGitBranch />
              <h2>Repositórios</h2>
            </SubHeading>
          </Section>

          {repositories.map(repository => {
            return (
              <Link
                key={repository.id}
                href={`https://github.com/${repository.full_name}`}
                passHref
              >
                <a target="_blank">
                  <Repository key={repository.id}>
                    <div>
                      <strong>{repository.name}</strong>
                      <p>{repository.description}</p>
                    </div>
                    <FiChevronRight />
                  </Repository>
                </a>
              </Link>
            )
          })}
        </RepositoriesContainer>
      </ContentContainer>
      <Footer />
    </motion.div>
  )
}

export default About

export const getStaticProps: GetStaticProps<IAboutProps> = async context => {
  const response = await api.get<IRepository[]>('users/Dovalization/repos')
  const repositories = response.data

  return {
    props: {
      repositories
    },
    revalidate: 60
  }
}
