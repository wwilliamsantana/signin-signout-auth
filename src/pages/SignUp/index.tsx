import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit, reset } = useForm()

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  function signUpData(data) {
    console.log(data)
    reset()
  }

  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
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
          <FormContainer onSubmit={handleSubmit(signUpData)}>
            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="password">Senha</label>
                <a href="/">Esqueceu a senha</a>
              </LabelWrapper>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />

              {passwordVisible ? (
                <Eye onClick={isTogglePasswordVisible} />
              ) : (
                <EyeSlash onClick={isTogglePasswordVisible} />
              )}
            </InputWrapper>

            <Button type="submit">Cadastrar</Button>

            <CreateAccount>
              Já possui uma conta?
              <a href="/signin"> Clique aqui</a>
            </CreateAccount>
          </FormContainer>
        </Content>
      </Box>
    </Container>
  )
}
