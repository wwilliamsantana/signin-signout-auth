import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import bgImage from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
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
} from './style'

export const SignUpSchema = z.object({
  name: z.string().min(2, 'Informe seu nome!'),
  email: z
    .string()
    .email('Formato de e-mail inválido')
    .nonempty('O e-mail é obrigatório!'),
  password: z.string().min(8, 'A senha precisa de no mínino 8 caracteres'),
})

type SignUpProps = z.infer<typeof SignUpSchema>

export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: zodResolver(SignUpSchema),
  })

  function isTogglePasswordVisible() {
    setPasswordVisible((state) => !passwordVisible)
  }

  async function signUpData(data: SignUpProps) {
    const response = await api.post('/create', data)
    console.log(response.data)

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
                autoComplete="off"
                placeholder="Digite seu nome"
                {...register('name')}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                autoComplete="off"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </InputWrapper>

            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="password">Senha</label>
                <a href="/">Esqueceu a senha</a>
              </LabelWrapper>
              <input
                type={passwordVisible ? 'text' : 'password'}
                autoComplete="off"
                placeholder="Digite sua senha"
                {...register('password')}
              />

              {passwordVisible ? (
                <Eye onClick={isTogglePasswordVisible} />
              ) : (
                <EyeSlash onClick={isTogglePasswordVisible} />
              )}
              {errors.password && <span>{errors.password.message}</span>}
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
