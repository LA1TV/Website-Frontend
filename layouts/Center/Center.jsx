import React from 'react'
import styled from 'styled-components'

const DeafultCenter = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: ${({ theme }) => theme.spacing.base};
  padding-right: ${({ theme }) => theme.spacing.base};
`

const Center = ({ className, children }) => (
  <DeafultCenter className={className}>
    {children}
  </DeafultCenter>
)

export default Center
