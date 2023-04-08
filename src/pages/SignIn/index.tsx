import { useState } from 'react'
import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido'),
  password: z.string().min(8, 'A senha precisa de no mínino 8 caracteres'),
})

type SignInProps = z.infer<typeof signInSchema>

export function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: zodResolver(signInSchema),
  })

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  function signInData(data: SignInProps) {
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
              {errors.email && <span>{errors.email.message}</span>}
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
              {errors.password && <span>{errors.password.message}</span>}
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
