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
  min-height: 80vh;

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
