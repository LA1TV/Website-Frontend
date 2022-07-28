import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.spacing.full};
  font-size: 1rem;
`

const Paragraph = ({ children }) => (
  <StyledP>
    {children}
  </StyledP>
)

export default Paragraph
