import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root{
    font-size: 62.5%;
    font-family: 'Titillium Web', sans-serif;
  }

 body{
  font-size: 1.6rem;
 }

 input, textarea, button {
  all: unset;
  box-sizing: border-box;
}

`
