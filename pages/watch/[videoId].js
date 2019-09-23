import React from 'react'
import fetch from 'isomorphic-unfetch'
import VideoDisplay from 'components/VideoDisplay'
import styled from 'styled-components'
import Error from 'next/error'

const Page = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.double};

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: 0;
  } 
`

const VideoName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`

const StyledVideoDisplayDiv = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.double};
`

const Post = ({ name, embed, statusCode }) => statusCode !== 200
  ? <Error statusCode={statusCode} />
  : <Page>
    <div>
      <StyledVideoDisplayDiv>
        <VideoDisplay source={embed} />
      </StyledVideoDisplayDiv>
      <VideoName>{name}</VideoName>
    </div>
  </Page>

Post.getInitialProps = async ({ query: { videoId } }) => {
  const res = await fetch(`http://localhost:3000/api/watch?videoId=${videoId}`)

  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ...response }
}

export default Post
