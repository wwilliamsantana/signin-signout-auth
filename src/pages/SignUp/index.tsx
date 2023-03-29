import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'

import {
  Box,
  Button,
  Container,
  Content,
  CreateAccount,
  FormContainer,
  Header,
  Headline,
  InputWrapper,
  LabelWrapper,
} from './styles'

export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  return (
    <Container>
      <img src={bgImage} alt="" />
      <Box>
        <Header>
          <img src={logo} alt="" />
        </Header>
        <Content>
          <Headline>
            <h1>Cadastre-se</h1>
            <p>
              Registre-se para começar a construir seus projetos ainda hoje.
            </p>
          </Headline>
          <FormContainer>
            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </InputWrapper>

            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="password">Senha</label>
                <a href="/">Esqueceu a senha</a>
              </LabelWrapper>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />

              {passwordVisible ? (
                <Eye onClick={isTogglePasswordVisible} />
              ) : (
                <EyeSlash onClick={isTogglePasswordVisible} />
              )}
            </InputWrapper>

            <Button>Cadastrar</Button>

            <CreateAccount>
              Já possui uma conta?
              <a href="/"> Clique aqui</a>
            </CreateAccount>
          </FormContainer>
        </Content>
      </Box>
    </Container>
  )
}
