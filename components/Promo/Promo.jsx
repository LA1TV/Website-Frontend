import React from 'react'
import styled from 'styled-components'
import Sidebar from 'layouts/Sidebar'
import Image from '../Image'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const StyledHeading = styled(Heading)`
  padding-bottom: ${({ theme }) => theme.spacing.half}
`

const Promo = ({ heading, description }) => {
  const left = (<Image src="https://www.la1tv.co.uk/file/26708" />)
  const right = (
    <>
      <StyledHeading type="h2">{heading}</StyledHeading>
      <Paragraph>{description}</Paragraph>
    </>
  )
  return (
    <Sidebar sidebarWidth="50%" minWidth="10rem" left={left} right={right}/>
  )
}

export default Promo
