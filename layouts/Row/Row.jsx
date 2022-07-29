import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`

  > * {
    margin-left: 0;
    margin-right: 0;
    width: ${({ n, theme }) => `calc((100%/${n}) - (${theme.spacing.base}/(${n}/${n - 1})))`};
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

const StyledDiv = styled.div`
display: inline-block;
vertical-align: top;
`

const Row = ({ children, recursive, count = 'auto' }) => (
  <StyledRow recursive={recursive} n={count === 'auto' ? children.length : count}>
    {children.map((child, key) => <StyledDiv key={key}>{child}</StyledDiv>)}
  </StyledRow>
)

export default Row
