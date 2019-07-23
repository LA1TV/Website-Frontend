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
  grid-gap: ${({ theme }) => theme.spacing.double };
  padding: ${({ theme }) => theme.spacing.double };

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  } 
`

const VideoName = styled.h1`
    font-size: ${({ theme }) => theme.spacing.double}
`

const StyledVideoDisplayDiv = styled.div`
    position: relative;
    padding-top: calc(9/16 * 100%);
    padding-bottom: ${({ theme }) => theme.spacing.double };
`

const Post = ({ name, embed, statusCode }) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />
  }

  return (
  <Page>
    <div>
      <StyledVideoDisplayDiv>
        <VideoDisplay source={embed} />
      </StyledVideoDisplayDiv>
      <VideoName>{name}</VideoName>
    </div>

    <h1>This is some text for ben gawsh darnit woman</h1>
  </Page>
)}

Post.getInitialProps = async function ({ query: { videoId } }) {
  const res = await fetch(`http://localhost:3000/api/watch?videoId=${videoId}`)
  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ... response }
}

export default Post
