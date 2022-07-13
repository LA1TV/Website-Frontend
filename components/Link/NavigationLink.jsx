import Link from './Link'
import styled from 'styled-components'
import React from 'react'

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.double};
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.navBackground};
  color: ${({ theme }) => theme.color.primary};
  transition: background-color 50ms linear, color 50ms linear;

  :hover,
  :active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.accent};
    text-decoration: none;
  }
`

const StyledListItem = styled.li`
  display: inline-block;
`

const NavigationLink = ({ children, className, href }) => (
  <StyledListItem>
    <StyledLink href={href}>
      {children}
    </StyledLink>
  </StyledListItem>
)

export default NavigationLink
