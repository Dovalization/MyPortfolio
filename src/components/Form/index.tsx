import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FormContainer, SuccessMessage } from './styles'
import { FiThumbsUp } from 'react-icons/fi'
import theme from '../../styles/theme'

const Form: React.FC = () => {
  const [state, handleSubmit] = useForm('contactMe')

  if (state.succeeded) {
    return (
      <SuccessMessage
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <FiThumbsUp size={64} color={theme.colors.primary} />

        <strong>Sua mensagem foi enviada com sucesso</strong>
        <p>Responderei assim que possível, obrigado!</p>
      </SuccessMessage>
    )
  }
  return (
    <FormContainer
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="contactMessageContainer">
          <div className="nameContainer">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="emailContainer">
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" id="email" />
            <ValidationError
              field="email"
              prefix="Email"
              errors={state.errors}
            />
          </div>
          <div className="messageContainer">
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>

          <ValidationError errors={state.errors} />
        </div>
        <div className="submitButtonContainer">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </FormContainer>
  )
}

export default Form
