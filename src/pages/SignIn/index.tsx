import {
  Container,
  Box,
  Header,
  Content,
  Headline,
  FormContainer,
  InputWrapper,
  LabelWrapper,
  Button,
  CreateAccount,
} from './styles'

import { Eye, EyeSlash } from '@phosphor-icons/react'

import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import { useState } from 'react'

export function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  return (
    <Container>
      <Box>
        <Header>
          <img src={logo} alt="Logo" />
        </Header>
        <Content>
          <Headline>
            <h1>Acesse a plataforma.</h1>
            <p>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
          </Headline>
          <FormContainer>
            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </InputWrapper>

            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="email">Senha</label>
                <a href="/">Esqueceu sua senha?</a>
              </LabelWrapper>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Digite sua senha"
              />
              {!passwordVisible ? (
                <Eye onClick={isTogglePasswordVisible} />
              ) : (
                <EyeSlash onClick={isTogglePasswordVisible} />
              )}
            </InputWrapper>

            <Button>Entrar</Button>

            <CreateAccount>
              Ainda não tem uma conta?
              <a href="/"> Inscreva-se</a>
            </CreateAccount>
          </FormContainer>
        </Content>
      </Box>

      <img src={bgImage} alt="" />
    </Container>
  )
}
