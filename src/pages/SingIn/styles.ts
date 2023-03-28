import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;

  & > img:first-of-type {
    width: 50%;
    object-fit: cover;
  }
`

export const Box = styled.main`
  width: 50%;
`

export const Header = styled.header`
  margin-left: 11.2rem;
  margin-top: 4rem;

  img {
    width: 16rem;
  }
`

export const Content = styled.main`
  max-width: 38.4rem;
  width: 100%;

  margin-top: 11.4rem;
  margin-left: 11.2rem;
`

export const Headline = styled.div`
  max-width: 35rem;

  h1,
  p {
    margin-top: 1.6rem;
  }

  h1 {
    font-weight: 700;
    font-size: 3.6rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-weight: 400;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const FormContainer = styled.form`
  margin-top: 4rem;
`

export const InputWrapper = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-800']};
  }

  input {
    padding: 1.6rem 1.2rem;
    border-radius: 0.4rem;
    width: 100%;

    border: 0.1rem solid ${(props) => props.theme['gray-200']};

    margin-top: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-400']};

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme['purple-400']};
    }

    &:disabled {
      opacity: 0.35;
    }
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme['purple-400']};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const Button = styled.button`
  width: 100%;
  padding: 1.6rem 2.4rem;
  background-color: ${(props) => props.theme['purple-400']};
  text-align: center;
  border-radius: 0.4rem;
  margin: 3.2rem 0;
  color: #fff;
  font-weight: 700;
  transition: ease background-color 0.2s;

  border: 0.1rem solid ${(props) => props.theme['purple-400']};

  &:hover {
    background-color: ${(props) => props.theme['purple-200']};
  }
`
export const CreateAccount = styled.div`
  color: ${(props) => props.theme['gray-600']};
  font-weight: 400;

  a {
    font-weight: 700;
    color: ${(props) => props.theme['purple-400']};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
