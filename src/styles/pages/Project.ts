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

export const ProjectImage = styled.div`
  position: relative;
  min-height: 60vh;
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
    opacity: 1;
    transition: opacity 0.25s ease-in-out;

    .logoImg {
      /* max-width: 30% !important;
      min-width: 30% !important; */
      @media screen and (max-width: 1400px) {
        /* max-width: 50% !important;
        min-width: 50% !important; */
      }
    }
  }

  @media screen and (max-width: 960px) {
    min-height: 30vh;
  }
`

export const ProjectInfo = styled.div`
  margin: 5vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    div:first-of-type {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  p {
    margin-bottom: 2vh;
    line-height: 1.5em;
  }
`
export const SubHeading = styled.h2`
  margin-bottom: 2vh;

  color: ${props => props.theme.colors.primary};
  font-size: 2.5vw;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 1400px) {
    font-size: 32px;
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
