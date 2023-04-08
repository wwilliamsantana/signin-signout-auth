import { useState } from 'react'
import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
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

export function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  function signInData(data) {
    console.log(data)
    reset()
  }

  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
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
          <FormContainer onSubmit={handleSubmit(signInData)}>
            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="password">Senha</label>
                <a href="/">Esqueceu sua senha?</a>
              </LabelWrapper>
              <input
                autoComplete="off"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Digite sua senha"
                {...register('password')}
              />
              {!passwordVisible ? (
                <Eye onClick={isTogglePasswordVisible} />
              ) : (
                <EyeSlash onClick={isTogglePasswordVisible} />
              )}
            </InputWrapper>

            <Button type="submit">Entrar</Button>

            <CreateAccount>
              Ainda não tem uma conta?
              <a href="/signup"> Inscreva-se</a>
            </CreateAccount>
          </FormContainer>
        </Content>
      </Box>

      <img src={bgImage} alt="" />
    </Container>
  )
}
