import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const StyledLink = styled.a`
  text-decoration: blink;
  text-decoration:underline;
  text-decoration-color: ${({ theme }) => theme.color.accent};
  color: inherit;

  :hover,
  :active {
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondaryHighlight};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color.secondaryHighlight};
  }
`

const BaseLink = ({ children, className, href, external = false, newTab = false }) => {
  if (external) {
    return <StyledLink className={className} href={href} target={newTab ? '_blank' : '_self'}>{children}</StyledLink>
  } else {
    return <Link href={href}>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  }
}

export default BaseLink
