import React from 'react'
import { StyledFooter, FooterContainer } from './styles'
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <strong>Copyright © Guilherme Doval Estima da Silva, 2020</strong>
        <div>
          <Link href="https://www.instagram.com/dovalization">
            <a target="_blank">
              <FiInstagram size={32} color="#fff" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/doval.guilherme">
            <a target="_blank">
              <FiFacebook size={32} color="#fff" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/guilherme-doval/">
            <a target="_blank">
              <FiLinkedin size={32} color="#fff" />
            </a>
          </Link>
          <Link href="https://github.com/Dovalization">
            <a target="_blank">
              <FiGithub size={32} color="#fff" />
            </a>
          </Link>
        </div>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
