import React from 'react'
import fetch from 'isomorphic-unfetch'
import Sidebar from 'layouts/Sidebar'
import Center from 'layouts/Center'
import VideoDisplay from 'components/VideoDisplay'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import Error from 'next/error'
import config from '../../config.json'

const Post = ({ name, description, Streamables, thumbnailS3Bucket, thumbnailS3Object, statusCode }) => {
  if (statusCode !== 200) return <Error statusCode={statusCode} />

  const right = <></>

  const left =
    <>
      <Heading type="h1">{name}</Heading>
      <Paragraph>{description}</Paragraph>
    </>

  return (
    <Center>
      <VideoDisplay
        streamables={Streamables}
        poster={`${process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT}/v1/s3/${thumbnailS3Bucket}/${thumbnailS3Object}`}
      />
      <Sidebar left={left} right={right} sidebarOnRight minWidth="50%" sidebarWidth="22rem"/>
    </Center>
  )
}

Post.getInitialProps = async ({ query: { videoId } }) => {
  const res = await fetch(`${config.env.FRONTEND_DOMAIN}/api/watch?videoId=${videoId}`)

  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ...response }
}

export default Post
