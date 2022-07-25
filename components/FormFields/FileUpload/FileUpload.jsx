import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
`
const StyledLabel = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
`

const FileUpload = ({ label, onChange }) => {
  const id = React.useId()
  return (
    <span>
      <StyledLabel htmlFor={id}>{label}: </StyledLabel>
      <StyledInput type="file" id={id} onChange={onChange} />
    </span>
  )
}

export default FileUpload
