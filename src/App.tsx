import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { AuthProvider } from './context/auth'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
        </ThemeProvider>
        <GlobalStyles />
      </BrowserRouter>
    </AuthProvider>
  )
}
