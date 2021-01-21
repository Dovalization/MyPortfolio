import styled, { css } from 'styled-components'
import { FiCoffee } from 'react-icons/fi'

import { Container } from '../../styles/global'
import Link from 'next/link'

interface INavProps {
  isSticky?: boolean
}

interface INavMenuProps {
  isOpen: boolean
}

export const Nav = styled.nav<INavProps>`
  ${props =>
    props.isSticky
      ? css`
          background: ${props.theme.colors.primary};
          padding: 0;
        `
      : css`
          background: transparent;
          padding: 100px 0;
        `}
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 999;
  transition: all 0.5s ease;
  @media screen and (max-width: 960px) {
    background: ${props => props.theme.colors.primary};
    padding: 0;
  }
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
  }
`

export const NavIcon = styled(FiCoffee)`
  margin-right: 8px;
`

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul<INavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    ${props =>
      props.isOpen
        ? css`
            top: 80px;
            z-index: -1;
          `
        : css`
            top: -100vh;
            z-index: -1;
          `};
    left: 0;
    opacity: 0.95;
    transition: all 0.5s ease;
    background: ${props => props.theme.colors.primary};
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.2s ease-out;
  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #e8e8e8;
      transition: all 0.3s ease;
    }
  }
`
