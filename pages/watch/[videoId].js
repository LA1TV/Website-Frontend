import React from 'react'
import fetch from 'isomorphic-unfetch'
import Sidebar from 'layouts/Sidebar'
import Center from 'layouts/Center'
import VideoDisplay from 'components/VideoDisplay'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import Error from 'next/error'
import env from 'utilities/env'

const Post = ({ name, description, Streamables, thumbnailS3Bucket, thumbnailS3Object, statusCode, releaseDate }) => {
  if (statusCode !== 200) return <Error statusCode={statusCode} />

  const right = <></>

  const left =
    <>
      <Heading type="h1">{name}</Heading>
      <Paragraph>{description}</Paragraph>
    </>

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: name,
    description: description,
    thumbnailUrl: [
      `${process.env.PUBLIC_S3_DOMAIN}/${thumbnailS3Bucket}/${thumbnailS3Object}`
    ],
    uploadDate: releaseDate,
    // duration: 'PT16M06S',
    contentUrl: `${process.env.PUBLIC_S3_DOMAIN}/${Streamables[0].s3Bucket}/${Streamables[0].s3Object}`,
    regionsAllowed: 'GB'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonld }}
      />
      <Center>
        <VideoDisplay
          streamables={Streamables}
          poster={`${env('S3_DOMAIN')}/${thumbnailS3Bucket}/${thumbnailS3Object}`}
        />
        <Sidebar left={left} right={right} sidebarOnRight minWidth="50%" sidebarWidth="22rem"/>
      </Center>
    </>
  )
}

Post.getInitialProps = async ({ query: { videoId } }) => {
  const res = await fetch(`${env('FRONTEND_DOMAIN')}/api/watch?videoId=${videoId}`)

  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ...response }
}

export default Post
