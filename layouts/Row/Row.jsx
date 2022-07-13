import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`

  > * {
    margin-left: 0;
    margin-right: 0;
    width: ${({ n }) => (100 / n - 1)}%;
} 

  ${({ theme, recursive }) => recursive
    ? `* + * {margin-left: ${theme.spacing.base};}`
    : `> * + * {margin-right: ${theme.spacing.base};}`
}

@media only screen and (max-width: 628px) {
  > * {
    margin: 0;
    width: 100%;
} 

  ${({ theme, recursive }) => recursive
    ? `* + * {margin-bottom: ${theme.spacing.base};}`
    : `> * + * {margin-top: ${theme.spacing.base};}`
}
}
`

const Row = ({ children, recursive }) => (
  <StyledRow recursive={recursive} n={children.length}>
    {children.map((child, key) => <div style={{ display: 'inline-block' }} key={key}>{child}</div>)}
  </StyledRow>
)

export default Row
