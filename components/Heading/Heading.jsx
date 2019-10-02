import React from 'react'
import styled from 'styled-components'

const StyledHeading = ({ type }) => styled(type)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 2.5rem;
  font-weight: bold;
`

const Heading = ({ type = 'h1', children }) => {
  const HeadingWithType = StyledHeading({ type })

  return (
    <HeadingWithType>
      {children}
    </HeadingWithType>
  )
}

export default Heading
