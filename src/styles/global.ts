import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text};
    font-family: Montserrat, sans-serif;

  }

  p {
    line-height: 1.4em;

  }

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

`

export const Container = styled.div`
  z-index: 1;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  /* padding-right: 150px;
  padding-left: 150px; */
  @media screen and (max-width: 1400px) {
    /* padding-right: 30px;
    padding-left: 30px; */
    width: 85%;
  }

  @media screen and (max-width: 991px) {
    /* padding-right: 30px;
    padding-left: 30px; */
    width: 90%;
  }
`
