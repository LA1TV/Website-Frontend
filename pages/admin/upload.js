import React from 'react'
import AuthenticatedArea from 'components/AuthenticatedArea'
import AuthContext from 'components/AuthenticatedArea/context'
import Paragraph from 'components/Paragraph'
import S3FileUpload from 'components/FormFields/S3FileUpload'
import { inputState } from 'utilities/hooks'
import TextField from '../../components/FormFields/TextField'
import TextArea from '../../components/FormFields/TextArea'
import Button from 'components/Button'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'
import env from 'utilities/env'

const Index = () => {
  const titleState = inputState()
  const descriptionState = inputState()
  const thumbnailObjectState = inputState()
  const thumbnailBucket = 'thumbnails'
  const videoObjectState = inputState()
  const videoBucket = 'videos'
  const timeState = inputState(Date.now().toString())
  const router = useRouter()

  const save = async function (apikey, title, description, thumbnailBucket, thumbnailObject, videoBucket, videoObject, releaseDate) {
    const res = await fetch(`${env('FRONTEND_DOMAIN')}/api/admin/upload`, {
      method: 'POST',
      headers: { 'x-api-key': apikey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, thumbnailBucket, thumbnailObject, videoBucket, videoObject, releaseDate })
    })
    return await res.json()
  }

  return <AuthenticatedArea forceLogin>
    <Heading>Upload a video</Heading>
    <AuthContext.Consumer>{value => <>
      <TextField label="Title" {...titleState}></TextField>
      <TextArea label="Description" {...descriptionState}></TextArea>
      <S3FileUpload label="Thumbnail" s3bucket={thumbnailBucket} {...thumbnailObjectState}/>
      <S3FileUpload label="Video" s3bucket={videoBucket} {...videoObjectState}/>
      <TextField label="Release Time, in Unix Epoch" {...timeState}></TextField>
      <Paragraph>A proper date/time picker will be implemented Soon™. In the meantime, you can use a
          Unix Epoch. <span style={{ textDecoration: 'underline white', fontWeight: 'bold' }}>You must use one with millisecond precision.</span> Or just leave it as-is
          to release immediately.
      </Paragraph>
      <Button text="Save"
        disabled = {
          titleState.value === '' ||
            descriptionState.value === '' ||
            thumbnailObjectState.value === '' ||
            videoObjectState.value === '' ||
            isNaN(timeState.value)
        }
        onClick={async function () {
          const res = await save(value.apikey, titleState.value, descriptionState.value,
            thumbnailBucket, thumbnailObjectState.value, videoBucket, videoObjectState.value, timeState.value)
          router.push('/watch/' + res.id)
        }}></Button>
    </>}</AuthContext.Consumer>
  </AuthenticatedArea>
}

export default Index
