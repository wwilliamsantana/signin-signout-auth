import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  margin: auto;
  background: ${(props) => props.theme['gray-200']};
`

export const NavbarContainer = styled.nav`
  max-width: 90%;
  margin: auto;
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  .NavigationRoot {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .NavigationList {
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    list-style: none;
    margin: 0;
  }

  .NavigationTrigger {
    padding: 0.8rem 1.2rem;
    outline: none;
    user-select: none;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-900']};
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .NavigationTrigger[data-state='open'] {
    color: ${(props) => props.theme['purple-400']};
    svg {
      transition: 0.3s ease;
      transform: rotate(180deg);
    }
  }

  .NavigationTrigger[data-state='closed'] {
    svg {
      transition: 0.3s ease-in-out;
    }
  }

  .NavigationItem {
    position: relative;

    .NavigationLink {
      padding: 0.8rem 1.2rem;
      text-decoration: none;
      text-transform: uppercase;
      color: ${(props) => props.theme['gray-900']};
      font-weight: 500;

      display: flex;
      align-items: center;

      &:hover {
        color: ${(props) => props.theme['purple-400']};
      }
    }
  }

  .NavigationContent {
    position: absolute;
    top: 10;
    left: 0;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.5rem;

      a {
        padding: 0.5rem 0.8rem;
        text-decoration: none;
        cursor: pointer;
        color: ${(props) => props.theme['gray-700']};

        &:hover {
          color: ${(props) => props.theme['purple-400']};
        }
      }
    }
  }
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

export const Content = styled.main`
  max-width: 90%;
  margin: auto;
  padding-top: 1rem;
`
