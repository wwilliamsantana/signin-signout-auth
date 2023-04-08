import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { AuthProvider } from './context/auth'
import { Router } from './routes'

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
