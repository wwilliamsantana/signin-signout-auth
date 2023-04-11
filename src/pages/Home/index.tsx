// import { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../../context/auth'
// import { api } from '../../services/api'

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

export function Home() {
  // const { signOut, user } = useContext(AuthContext)
  // const [users, setUsers] = useState()

  // async function listUsers() {
  //   const response = await api.get('/users', {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('@Auth:token')}`,
  //     },
  //   })
  //   const data = response.data

  //   setUsers(data)
  // }

  // useEffect(() => {
  //   listUsers()
  // }, [])

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
          <p>Olá user </p>
          <button>SignOut</button>
        </ContentUser>
      </NavbarContainer>
      <Content> content</Content>
    </Container>
  )
}
