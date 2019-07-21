import React from 'react'
import fetch from 'isomorphic-unfetch'

const Post = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
)

Post.getInitialProps = async function ({ query: { video_id } }) {
  const res = await fetch(`http://localhost:3000/api/watch?video_id=${video_id}`)
  const response = await res.json()

  return response;
}

export default Post