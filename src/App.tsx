import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}
