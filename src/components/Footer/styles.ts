import styled from 'styled-components'
import { Container } from '../../styles/global'

export const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.text};
  border-radius: 20px 20px 0 0;
`

export const FooterContainer = styled(Container)`
  display: flex;
  padding: 3vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  strong {
    color: #fff;
    @media screen and (max-width: 960px) {
      text-align: center;
      font-size: 12px;
    }
  }

  div {
    margin-top: 3vh;
    a {
      margin: 0.5em;
    }
  }

  ${Container}
`
