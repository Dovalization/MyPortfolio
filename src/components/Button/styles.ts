import styled, { css } from 'styled-components'
import { shade } from 'polished'

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
  box-sizing: border-box;
  border: 3px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${shade(-0.15, '#2B77BC')};
    border: 3px solid ${shade(-0.15, '#2B77BC')};
  }

  transition: all 0.2s;

  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 20px;
    align-self: center;
    margin: 3vh 0;
  }
`
