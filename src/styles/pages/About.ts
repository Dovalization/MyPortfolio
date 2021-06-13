import styled from 'styled-components'
import { Container } from '../global'

export const HeaderBackground = styled.div`
  position: relative;
  min-height: 70vh;
  z-index: -1;
`

export const ContentContainer = styled(Container)`
  margin-top: -45vh;
  background: #fff;
  border-radius: 20px;
  padding: 5em;

  hr {
    border: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 960px) {
    padding: 1em;
  }
  ${Container}
`
export const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10vh;

  > div p {
    line-height: 1.4em;
    margin-top: 3vh;
  }

  div + div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 960px) {
      align-items: center;
    }
  }

  div p strong {
    font-weight: 500;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 700;
  @media screen and (max-width: 960px) {
    font-size: 48px;
    text-align: center;
  }
`

export const Quote = styled.blockquote`
  line-height: 1.4em;

  margin: 3vh 0;
  padding: 0 1em;
  border-left: 0.3em solid ${props => props.theme.colors.primary};
  color: #5f5f5f;

  span {
    display: block;
    font-weight: 600;
    margin-top: 1vh;
  }
`
export const SectionsContainer = styled.section`
  margin-top: 5vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const Section = styled.div``

export const SubHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2vh;

  svg {
    width: 3vw;
    height: 3vw;
    color: ${props => props.theme.colors.primary};
    margin-right: 1em;
    @media screen and (max-width: 1400px) {
      width: 32px;
      height: 32px;
    }
  }

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 2.5vw;
    text-transform: uppercase;
    @media screen and (max-width: 1400px) {
      font-size: 32px;
    }
  }
`

export const Experience = styled.div`
  margin-bottom: 2vh;

  display: flex;
  span {
    width: 3.5rem;
    font-weight: 700;
    font-size: 24px;
    margin-right: 1em;
  }

  div {
    strong {
      font-weight: 600;
      font-size: 24px;
      text-transform: uppercase;
      @media screen and (max-width: 1400px) {
        font-size: 20px;
      }
    }
  }
`

export const Tech = styled.span`
  color: #fff;
  font-size: 1vw;
  font-weight: 600;
  padding: 0.5em 1.5em;
  margin: 0.5em;
  background: ${props => props.theme.colors.primary};
  border-radius: 20px;
  display: inline-block;
  @media screen and (max-width: 1400px) {
    font-size: 12px;
  }
`

export const RepositoriesContainer = styled.section`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  div:first-of-type {
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 960px) {
    div:first-of-type {
      grid-column: 1;
    }
  }
`

export const Repository = styled.div`
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 2em;
  display: flex;
  align-items: center;
  border-radius: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
  strong {
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
  }

  p {
  }

  svg {
    margin-left: auto;
  }
`
