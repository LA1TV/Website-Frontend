import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.primary}
`

const Paragraph = ({ children }) => (
  <StyledP>
    {children}
  </StyledP>
)

export default Paragraph
