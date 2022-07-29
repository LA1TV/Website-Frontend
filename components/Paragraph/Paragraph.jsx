import React from 'react'
import styled from 'styled-components'

const StyledP = ({ smallprint, overflowLine = -1 }) => styled.p`
  --size: ${smallprint ? '0.7' : '1'}rem;
  margin-bottom: ${({ theme }) => theme.spacing.full};
  color: ${smallprint ? '#999999' : ({ theme }) => theme.color.primary};
  font-size: var(--size);
  ${(overflowLine !== -1) ? `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${overflowLine};
  -webkit-box-orient: vertical;` : null}
`

const Paragraph = ({ smallprint = false, overflowLine = -1, children }) => {
  const StyledPConfigured = StyledP({ smallprint, overflowLine })
  return (<StyledPConfigured>
    {children}
  </StyledPConfigured>)
}

export default Paragraph
