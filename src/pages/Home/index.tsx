import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'

import {
  Container,
  Content,
  ContentNav,
  ContentUser,
  NavbarContainer,
} from './style'
import logoImg from '../../assets/logo.png'
import * as Navigation from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'
import { CaretDown } from '@phosphor-icons/react'

interface UserProps {
  id: string
  name: string
  email: string
}

export function Home() {
  const { signOut } = useContext(AuthContext)
  const [user, setUser] = useState({} as UserProps)

  useEffect(() => {
    async function getUserStorage() {
      const storageUser = localStorage.getItem('@Auth:user')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }
    }
    getUserStorage()
  }, [])

  return (
    <Container>
      <NavbarContainer>
        <ContentNav>
          <img src={logoImg} alt="logo img" />

          <Navigation.Root className="NavigationRoot">
            <Navigation.List className="NavigationList">
              <Navigation.Item className="NavigationItem">
                <Link to={'/'} className="NavigationLink">
                  About
                </Link>
              </Navigation.Item>

              <Navigation.Item className="NavigationItem">
                <Navigation.Trigger className="NavigationTrigger">
                  Services
                  <CaretDown size={15} weight="thin" />
                </Navigation.Trigger>
                <Navigation.Content className="NavigationContent">
                  <ul>
                    <Link to={'/'}>Service 1</Link>
                    <Link to={'/'}>Service 2</Link>
                    <Link to={'/'}>Service 3</Link>
                    <Link to={'/'}>Service 4</Link>
                  </ul>
                </Navigation.Content>
              </Navigation.Item>

              <Navigation.Item className="NavigationItem">
                <Navigation.Trigger className="NavigationTrigger">
                  Plans
                  <CaretDown size={15} weight="thin" />
                </Navigation.Trigger>
                <Navigation.Content className="NavigationContent">
                  <ul>
                    <Link to={'/'}>Flat 1</Link>
                    <Link to={'/'}>Flat 2</Link>
                    <Link to={'/'}>Flat 3</Link>
                    <Link to={'/'}>Flat 4</Link>
                  </ul>
                </Navigation.Content>
              </Navigation.Item>
            </Navigation.List>
          </Navigation.Root>
        </ContentNav>

        <ContentUser>
          <p>Olá, {user.name} </p>

          <button onClick={signOut}>Sign Out</button>
        </ContentUser>
      </NavbarContainer>

      <Content> Content</Content>
    </Container>
  )
}
