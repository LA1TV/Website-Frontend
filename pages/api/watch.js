import { la1tvFetcher } from 'utilities/api'

const parseResponse = ({ name, description, thumbnailS3Bucket, thumbnailS3Object, Streamables }) => ({
  name,
  description,
  thumbnailS3Bucket,
  thumbnailS3Object,
  Streamables
})

const handle = async ({ query: { videoId } }, res) => {
  const url = `/v1/video/${videoId}`

  const { statusCode, body } = await la1tvFetcher({ url, parser: parseResponse })

  res.status(statusCode).end(JSON.stringify(body))
}

export default handle
