import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const StyledLink = styled.a`
  text-decoration: blink;
  color: ${({ theme }) => theme.color.secondary};
  text-decoration:underline;
  text-decoration-color: ${({ theme }) => theme.color.accent};

  :hover,
  :active {
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondaryHighlight};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color.secondaryHighlight};
  }
`

const BaseLink = ({ children, className, href }) => (
  <Link href={href}>
    <StyledLink className={ className }>{ children }</StyledLink>
  </Link>
)

export default BaseLink
