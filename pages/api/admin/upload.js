import { la1tvFetcher } from 'utilities/api'

const handle = async (req, res) => {
  const url = '/v1/video'
  const apikey = req.headers['x-api-key']
  const body = req.body

  const { statusCode, responseBody } = await la1tvFetcher({
    url,
    method: 'POST',
    apikey: apikey,
    formData:
        {
          name: body.title,
          description: body.description,
          thumbnailS3Bucket: body.thumbnailBucket,
          thumbnailS3Object: body.thumbnailObject,
          releaseDate: parseInt(body.releaseDate),
          video: {
            s3Bucket: body.videoBucket,
            s3Object: body.videoObject
          }
        }
  }
  )
  console.log(statusCode, responseBody)
  console.log('HERE')
  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
