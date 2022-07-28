import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.5rem;
`

const Button = ({ onClick, text, disabled = false, type = 'button' }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default Button
