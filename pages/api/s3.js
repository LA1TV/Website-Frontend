import { la1tvFetcher } from 'utilities/api'

const handle = async (req, res) => {
  const { query: { bucket, file } } = req
  const apikey = req.headers['x-api-key']
  const url = `/v1/s3/getPUTurl/${bucket}/${file}`
  console.log(url)

  const { statusCode, responseBody } = await la1tvFetcher({ url, apikey: apikey })
  console.log(statusCode, responseBody)
  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
