import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export function Home() {
  const { signOut, user } = useContext(AuthContext)

  return (
    <div>
      <h1>Olá, {user?.name}</h1>
      <button onClick={signOut}>Sair</button>
    </div>
  )
}
