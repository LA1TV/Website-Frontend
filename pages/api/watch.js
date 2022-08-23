import { la1tvFetcher } from 'utilities/api'

const parseResponse = ({ name, description, thumbnailS3Bucket, thumbnailS3Object, Streamables, releaseDate }) => ({
  name,
  description,
  thumbnailS3Bucket,
  thumbnailS3Object,
  Streamables,
  releaseDate
})

const handle = async ({ query: { videoId } }, res) => {
  const url = `/v1/video/${videoId}`

  const { statusCode, responseBody } = await la1tvFetcher({ url, parser: parseResponse })

  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
