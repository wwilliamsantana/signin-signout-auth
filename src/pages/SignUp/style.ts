import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  height: 100vh;

  & > img:first-of-type {
    width: 50%;
    object-fit: cover;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`
export const Box = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: -15rem;
    padding: 10rem;
  }
`
export const Header = styled.header`
  margin-top: 4rem;
  margin-right: 12rem;

  & > img {
    width: 16rem;
  }
`

export const Content = styled.div`
  max-width: 38.4rem;
  width: 100%;

  margin-right: 12rem;
  margin-top: 11.4rem;

  @media (max-width: 1024px) {
    margin: 5rem 0 0 0;
  }
`

export const Headline = styled.div`
  max-width: 35rem;
`

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 4rem;
`

export const InputWrapper = styled.div`
  position: relative;
  & + & {
    margin-top: 1.6rem;
  }

  label {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-800']};
  }

  input {
    width: 100%;
    font-size: 1.4rem;
    padding: 1.6rem 1.2rem;
    border: 0.1rem solid ${(props) => props.theme['gray-200']};
    border-radius: 0.4rem;
    margin-top: 0.8rem;
    color: ${(props) => props.theme['gray-800']};

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme['purple-400']};
    }

    &:disabled {
      opacity: 0.35;
    }
  }

  &:has(svg) {
    svg {
      position: absolute;
      top: 54%;
      right: 5%;
      color: ${(props) => props.theme['gray-400']};
      width: 2rem;
      height: 2rem;
    }
  }

  span {
    color: red;
    font-size: 14px;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-400']};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const Button = styled.button`
  width: 100%;
  border-radius: 0.4rem;
  margin: 3.2rem 0;
  padding: 1.6rem 2.4rem;
  color: #ffff;
  text-align: center;

  border: 0.1rem solid ${(props) => props.theme['purple-400']};
  background-color: ${(props) => props.theme['purple-400']};
  transition: ease background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-200']};
  }
`

export const CreateAccount = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme['purple-400']};

    &:hover {
      text-decoration: underline;
    }
  }
`
