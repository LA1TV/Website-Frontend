import React from 'react'
import styled from 'styled-components'

const size = {
  h1: 4.5,
  h2: 3,
  h3: 2,
  h4: 1.8
}

const StyledHeading = ({ type, overflowLine }) => styled(type)`
  --size: ${size[type]}rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: var(--size);
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.full};
  ${(overflowLine !== -1) ? `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${overflowLine};
  -webkit-box-orient: vertical;` : null}
`

const Heading = ({ type = 'h1', overflowLine = -1, children }) => {
  const HeadingWithType = StyledHeading({ type, overflowLine })

  return (
    <HeadingWithType>
      {children}
    </HeadingWithType>
  )
}

export default Heading
