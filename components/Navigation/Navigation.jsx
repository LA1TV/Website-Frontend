import styled from 'styled-components'
import Head from 'next/head'
import { NavigationLink } from '../Link'
import React from 'react'
import Center from 'layouts/Center'

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.color.navBackground};
  border-bottom: 2px solid ${({ theme }) => theme.color.accent};
`

const StyledEmbed = styled.img`
  height: 100%;
  align-self: flex-start;
`
const StyledOrderedList = styled.ol`
  margin-left: auto;
`

const StyledCenter = styled(Center)`
  display: flex;
`

const Navigation = ({ children }) => (
  <>
    <Head>
      <title>LA1TV</title>
      <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
    </Head>
    <StyledNav>
      <StyledCenter>
        <StyledEmbed src="/static/images/logo.svg"/>
        <StyledOrderedList>
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/watch/210">Shows</NavigationLink>
        </StyledOrderedList>
      </StyledCenter>
    </StyledNav>
    <Center>
      {children}
    </Center>
  </>
)

export default Navigation
