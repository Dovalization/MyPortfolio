import styled, { css } from 'styled-components'
import { Container } from '../global'
export const HeroSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120vh;
  z-index: -1;
  /* background: url('/guilherme-doval-home-herosec.jpg') no-repeat top;
  background-size: cover; */
  @media screen and (max-width: 960px) {
    height: 80vh;
  }
`

interface TitleProps {
  color?: string
}

interface FeaturedProjectCardProps {
  layout: 'main' | 'alternate'
}

export const NameTitle = styled.p`
  color: #fff;
  font-weight: 700;
  line-height: 30px;
  z-index: 1;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;

  @media screen and (max-width: 960px) {
    font-size: 18px;
    max-width: 90%;
  }
`

export const HeroSectionTitle = styled.h1`
  color: #fff;
  font-size: 3.5vw;

  font-weight: 700;
  text-align: center;
  z-index: 1;
  @media screen and (max-width: 960px) {
    font-size: 48px;
  }
`

export const CardsContainer = styled(Container)`
  margin: -15vh auto 0vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 8vw;

  @media screen and (max-width: 960px) {
    display: none;
  }
  ${Container}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 8vh 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  background: #fff;

  strong {
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 1.2vw;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`

export const Title = styled.h1<TitleProps>`
  color: ${props => (props.color ? props.color : props.theme.colors.primary)};
  /* font-size: 64px; */
  font-size: 3.5vw;

  font-weight: 700;
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 36px;
  }
`

export const FeaturedProjectsContainer = styled(Container)`
  margin: 10vh auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  justify-items: center;
  @media screen and (max-width: 960px) {
    margin: 5vh auto;
  }
  ${Container}
`

export const FeaturedProjectCard = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

export const FeaturedProjectContent = styled.div<FeaturedProjectCardProps>`
  display: grid;
  padding: 3em;
  gap: 2em;
  min-height: 50vh;
  ${props =>
    props.layout === 'main' &&
    css`
      grid-template-columns: 1fr 2fr;
    `}
  ${props =>
    props.layout === 'alternate' &&
    css`
      grid-template-columns: 2fr 1fr;
      @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
      }
    `}

  div {
    h2 {
      ${props =>
        props.layout === 'main' &&
        css`
          text-align: left;
        `}
      ${props =>
        props.layout === 'alternate' &&
        css`
          text-align: right;
          @media screen and (max-width: 960px) {
            text-align: center;
            font-size: 24px;
          }
        `}
      font-size: 2.5vw;
      /* font-size: 48px; */
      font-weight: 600;
    }

    p {
      ${props =>
        props.layout === 'main' &&
        css`
          text-align: left;
        `}
      ${props =>
        props.layout === 'alternate' &&
        css`
          text-align: right;
          @media screen and (max-width: 960px) {
            text-align: center;
            padding: 0 2rem;
            font-size: 18px;
          }
        `}
      margin-top: 1.5em;
      font-weight: 400;
      font-size: 0.9vw;
      line-height: 1.5em;
      /* min-height: 30vh; */
    }
    position: relative;
  }
  @media screen and (max-width: 960px) {
    padding: 0 0 3em 0;
  }
`

export const FeaturedProjectImageContainer = styled.div`
  img {
    border-radius: 20px;
  }
  @media screen and (max-width: 960px) {
    min-height: 35vh;
    img {
      border-radius: 20px 20px 0 0;
    }
  }
`

export const FeaturedProjectFooter = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.text};
  padding: 1em 3em;

  svg {
    margin-right: 1em;
  }
`
