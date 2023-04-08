import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface SignInProps {
  email: String
  password: string
}

interface UserProps {
  user: {
    id: number
    email: string
    password: string
  }
}

interface AuthContextProps {
  signIn: ({ email, password }: SignInProps) => void
  user: UserProps | null
  signed: boolean
}

export const AuthContext = createContext({} as AuthContextProps)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null)

  async function signIn({ email, password }: SignInProps) {
    console.log(email, password)
    const response = await api.post('/auth', {
      email,
      password,
    })

    if (response.data.error) {
      alert(response.data.error)
    } else {
      setUser(response.data)
      const { token, user } = response.data
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem('@Auth:token', token)
      localStorage.setItem('@Auth:user', user)
    }
  }

  useEffect(() => {
    async function loadingStoreData() {
      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser))
      }
    }
    loadingStoreData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
