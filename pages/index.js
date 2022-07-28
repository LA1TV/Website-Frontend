import React from 'react'
import Paragraph from 'components/Paragraph'
import VideoLink from 'components/VideoLink'
import Row from '../layouts/Row'
import RecommendationsRow from '../components/RecommendationsRow'
import Heading from '../components/Heading'

const Index = () => (<>
  <Heading>Welcome to LA1TV on-demand!</Heading>
  <Paragraph>We're Lancaster University's student TV station, producing content for you to enjoy
    and engage with your university. Have a browse, find something you like, or try something new!
    </Paragraph>
  <Heading type="h2">Watch something new:</Heading>
  <RecommendationsRow count={6} type="latest"></RecommendationsRow>
</>
)

export default Index
