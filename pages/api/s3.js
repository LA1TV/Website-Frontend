import { la1tvFetcher } from 'utilities/api'

const handle = async (req, res) => {
  const { query: { bucket, file } } = req
  const apikey = req.headers['x-api-key']
  const url = `/v1/s3/getPUTurl/${bucket}/${file}`
  console.log(url)

  const { statusCode, body } = await la1tvFetcher({ url, apikey: apikey })
  console.log(statusCode, body)
  res.status(statusCode).end(JSON.stringify(body))
}

export default handle
