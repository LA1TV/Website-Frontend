import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { amount = '24', offset = '0', page = '1' } }, res) => {
  const url = 'mediaItems?limit=6'

  const { statusCode, body } = await la1tvFetcher({ url })

  res.status(statusCode).end(JSON.stringify(body))
}

export default handle
