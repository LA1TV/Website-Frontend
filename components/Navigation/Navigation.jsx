import styled from 'styled-components';
import Head from 'next/head';
import { NavigationLink } from '../Link';
import React from 'react'

const StyledNav = styled.nav`
    width: 100%;
`

const Navigation = ({ children }) => (
    <>
        <Head>
            <title>Index</title>
            <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
        </Head>
        <StyledNav>
            <ol>
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/shows">Shows</NavigationLink>
                <NavigationLink href="/playlists">Playlists</NavigationLink>
                <NavigationLink href="/live">Livestreams</NavigationLink>
                <NavigationLink href="https://confluence.la1tv.co.uk/">Wiki</NavigationLink>
                <NavigationLink href="/contact">Contact</NavigationLink>
            </ol>
        </StyledNav>
        {children}
    </>
);

export default Navigation;