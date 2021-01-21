import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormContainer = styled(motion.div)`
  width: 80%;
  margin: 3vh auto 0 auto;
  label {
    display: block;

    font-weight: 600;
    font-size: 24px;
    margin-bottom: 0.5em;
    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }
  }
  div.contactMessageContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em 3em;
    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr;
    }

    .messageContainer {
      grid-column: 1 / span 2;
      @media screen and (max-width: 960px) {
        grid-column: 1;
      }
    }
  }
  input[type='text'],
  input[type='email'],
  textarea {
    width: 100%;
    padding: 0.5em;
    border: 2px solid black;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
  }

  input[type='text']:focus,
  input[type='email']:focus,
  textarea:focus {
    outline: 0;
    border-color: ${props => props.theme.colors.primary};
  }

  input[type='submit'] {
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #fff;
    background: ${props => props.theme.colors.primary};
    padding: 0.5em 1.2em;
    border-radius: 5px;
    text-align: center;
    border: none;
    margin: 1em auto;
    outline: 0;

    @media screen and (max-width: 960px) {
      margin: 0;
      font-size: 20px;
      align-self: center;
      margin: 1em auto;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  padding: 10vh 0;
  svg {
    margin: 1em;
  }
  strong {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }
  }
`
