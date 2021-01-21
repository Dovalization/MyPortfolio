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

  @media screen and (max-width: 960px) {
    padding: 1em;
  }
  ${Container}
`
export const Heading = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 700;
  @media screen and (max-width: 960px) {
    font-size: 48px;
    text-align: center;
  }
`

export const ProjectsSection = styled.section`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const Project = styled.div`
  position: relative;
  min-height: 40vh;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  div.projectOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 1;
    }

    .logoImg {
      /* max-width: 50% !important;
      min-width: 50% !important; */
      transform: translateY(20px);
      transition: transform 0.2s;
      @media screen and (max-width: 960px) {
        /* max-width: 70% !important;
        min-width: 70% !important; */
      }
    }

    &:hover .logoImg {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 960px) {
    min-height: 30vh;
  }
`
