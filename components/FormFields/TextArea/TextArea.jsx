import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.textarea`
  font-size: 1.5rem;
`
const StyledLabel = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
  display: block;
`

const TextField = ({ label, onChange, type = 'text', placeholder = '' }) => {
  const id = React.useId()
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}: </StyledLabel>
      <StyledInput type={type} id={id} onChange={onChange} placeholder={placeholder} cols="52" rows="5"/>
    </div>
  )
}

export default TextField
