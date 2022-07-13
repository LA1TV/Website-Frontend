import React from 'react'
import Paragraph from 'components/Paragraph'
import VideoLink from 'components/VideoLink'
import Row from '../layouts/Row'

const Index = () => (<>
  <Paragraph>Hello Next.js</Paragraph>
  <Row recursive children={[
    <VideoLink title="test" description="test" poster="http://localhost:8000/v1/s3/thumbnails/good%20owl.jpg"/>,
    <VideoLink title="test" description="test" poster="http://localhost:8000/v1/s3/thumbnails/good%20owl.jpg"/>
  ]}>
  </Row>
</>
)

export default Index
