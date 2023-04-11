import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoutes() {
  const { signed } = useContext(AuthContext)
  // const [auth, setAuth] = useState()

  // useEffect(() => {
  //   async function getAuthorizationRoute() {
  //     const response = await api.get('/users', {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('@Auth:token')}`,
  //       },
  //     })
  //     setAuth(response.data) // Mudar o dado no back-end
  //   }
  //   getAuthorizationRoute()
  // }, [signed])

  return signed ? <Outlet /> : <Navigate to={'/'} />
}
