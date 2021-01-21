import styled from 'styled-components'

export const ButtonLink = styled.a`
  display: inline-block;
  margin-right: 1em;
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  padding: 0.5em 1.2em;
  border-radius: 5px;
  width: fit-content;
  text-align: center;

  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 20px;
    align-self: center;
    margin: 3vh 0;
  }
`
