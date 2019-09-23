import styled from 'styled-components'
import Head from 'next/head'
import { NavigationLink } from '../Link'
import React from 'react'

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 2px solid ${({ theme }) => theme.color.accent};
`

const StyledEmbed = styled.img`
  height: 100%;
  align-self: flex-start;
`
const StyledOrderedList = styled.ol`
  margin-left: auto;
`

const Navigation = ({ children }) => (
  <>
    <Head>
      <title>Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
    </Head>
    <StyledNav>
      <StyledEmbed src="/static/images/logo.svg"/>
      <StyledOrderedList>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/watch/328">Shows</NavigationLink>
        <NavigationLink href="/playlists">Playlists</NavigationLink>
        <NavigationLink href="/live">Livestreams</NavigationLink>
        <NavigationLink href="/contact">Contact</NavigationLink>
      </StyledOrderedList>
    </StyledNav>

    {children}
  </>
)

export default Navigation
