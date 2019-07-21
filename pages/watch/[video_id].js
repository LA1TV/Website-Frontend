import React from 'react'
import fetch from 'isomorphic-unfetch'
import VideoDisplay from 'components/VideoDisplay'
import styled from 'styled-components'

const Fancy = styled.div`
    margin: 50px auto;
`

const Post = ({ name }) => (
  <>
    <Fancy>
        <h1>{name}</h1>
        <VideoDisplay />
    </Fancy>
  </>
)

Post.getInitialProps = async function ({ query: { video_id } }) {
  const res = await fetch(`http://localhost:3000/api/watch?video_id=${video_id}`)
  const response = await res.json()

  return response;
}

export default Post