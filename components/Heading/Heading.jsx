import React from 'react'
import styled from 'styled-components'

const size = {
  h1: 4.5,
  h2: 3,
  h3: 2,
  h4: 1.8
}

const StyledHeading = ({ type }) => styled(type)`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${size[type]}rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.full};
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
