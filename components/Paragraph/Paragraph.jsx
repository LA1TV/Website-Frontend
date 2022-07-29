import React from 'react'
import styled from 'styled-components'

const StyledP = ({ smallprint }) => styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.full};
  color: ${smallprint ? '#999999' : ({ theme }) => theme.color.primary};
  font-size: ${smallprint ? '0.7' : '1'}rem;
`

const Paragraph = ({ smallprint = false, children }) => {
  const StyledPConfigured = StyledP({ smallprint })
  return (<StyledPConfigured>
    {children}
  </StyledPConfigured>)
}

export default Paragraph
