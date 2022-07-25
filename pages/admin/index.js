import React from 'react'
import AuthenticatedArea from 'components/AuthenticatedArea'
import AuthContext from 'components/AuthenticatedArea/context'
import Paragraph from 'components/Paragraph'
import S3FileUpload from 'components/FormFields/S3FileUpload'

const Index = () => {
  const { apikey } = React.useContext(AuthContext)
  return <AuthenticatedArea forceLogin>
    <Paragraph>Hello Next.js</Paragraph>
    <AuthContext.Consumer>{value => <>
      <Paragraph>Hello {value.apikey}</Paragraph>
      <S3FileUpload label="test" s3bucket="videos" />
    </>}</AuthContext.Consumer>
  </AuthenticatedArea>
}

export default Index
