import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLink
} from './styles'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [headerSticky, setHeaderSticky] = useState(false)

  const listenScrollEvent = useCallback(() => {
    window.scrollY > 10 ? setHeaderSticky(true) : setHeaderSticky(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [listenScrollEvent])

  const handleToggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <>
      <Nav isSticky={headerSticky}>
        <NavbarContainer>
          <Link href="/" passHref>
            <NavLogo>
              <NavIcon />
              Guilherme Doval
            </NavLogo>
          </Link>
          <HamburgerIcon onClick={handleToggleMenu}>
            {isOpen ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
          </HamburgerIcon>
          <NavMenu isOpen={isOpen}>
            <NavItem>
              <Link href="/sobre" passHref>
                <NavLink>Sobre mim</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/projetos" passHref>
                <NavLink>Projetos</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contato" passHref>
                <NavLink>Contato</NavLink>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
