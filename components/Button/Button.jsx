import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.5rem;
`

const Button = ({ onClick, text, type = 'button' }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
