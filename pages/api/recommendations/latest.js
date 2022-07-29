import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { count = '6', page = '1', funct = 'get' } }, res) => {
  const url = `/v1/recommendations/latest?page=${page}&count=${count}&funct=${funct}`

  const { statusCode, responseBody } = await la1tvFetcher({ url })

  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
