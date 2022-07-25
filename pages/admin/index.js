import React from 'react'
import AuthenticatedArea from 'components/AuthenticatedArea'
import Paragraph from 'components/Paragraph'

const Index = () => (<AuthenticatedArea forceLogin>
  <Paragraph>Hello Next.js</Paragraph>
  <Paragraph>Hello Next.js</Paragraph>
</AuthenticatedArea>
)

export default Index
