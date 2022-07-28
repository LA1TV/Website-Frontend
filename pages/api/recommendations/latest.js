import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { amount = '6', page = '1' } }, res) => {
  const url = `/v1/recommendations/latest?page=${page}&count=${amount}`

  const { statusCode, responseBody } = await la1tvFetcher({ url })

  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
