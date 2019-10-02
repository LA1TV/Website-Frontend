import React from 'react'
import styled from 'styled-components'

const DeafultCenter = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ intrinsicCenter }) => intrinsicCenter
    ? `
      display:flex;
      flex-direction: row;
      align-items: center;
    `
    : ''
  }
`

const Center = ({ children, intrinsicCenter = false, maxWidth = '80rem' }) => (
  <DeafultCenter intrinsicCenter={intrinsicCenter} maxWidth={maxWidth}>
    {children}
  </DeafultCenter>
)

export default Center
