import { Route, Routes } from 'react-router-dom'
import { SingIn } from './pages/SingIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
    </Routes>
  )
}
