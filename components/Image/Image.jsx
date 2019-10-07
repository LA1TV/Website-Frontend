import React from 'react'
import styled from 'styled-components'

const StyedImage = styled.img`
  width: 100%;
`

const Image = ({ src, altText = '' }) => (
  <StyedImage src={src} altText={altText} />
)

export default Image
