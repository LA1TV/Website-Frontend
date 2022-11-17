import styled from 'styled-components'
import { NavigationLink } from '../Link'
import React from 'react'
import Center from 'layouts/Center'

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.color.navBackground};
  border-bottom: 2px solid ${({ theme }) => theme.color.accent};
`

const StyledLogo = styled.img`
  height: 100%;
  align-self: flex-start;
  color:${({ theme }) => theme.color.accent};
`
const StyledOrderedList = styled.ol`
  margin-left: auto;
`

const Navigation = ({ children }) => (
  <>
    <StyledNav>
      <Center intrinsicCenter>
        <Link href="/">
          <StyledLogo src="/static/images/logo.svg" alt="LA1TV"/>
        </Link>
        <StyledOrderedList>
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/browse/latest">Latest</NavigationLink>
        </StyledOrderedList>
      </Center>
    </StyledNav>
    <Center>
      {children}
    </Center>
  </>
)

export default Navigation
