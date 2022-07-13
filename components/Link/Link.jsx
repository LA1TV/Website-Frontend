import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};

  :hover,
  :active {
    cursor: pointer;
    color: ${({ theme }) => theme.color.accent};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color.primary};
  }
`

const BaseLink = ({ children, className, href }) => (
  <Link href={href}>
    <StyledLink className={ className }>{ children }</StyledLink>
  </Link>
)

export default BaseLink
