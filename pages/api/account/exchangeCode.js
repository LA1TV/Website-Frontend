import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { code } }, res) => {
  const url = '/v1/accounts/exchangeToken'

  const { statusCode, body } = await la1tvFetcher({ url, method: 'POST', formData: { code } })
  console.log(statusCode, body)
  res.status(statusCode).end(JSON.stringify(body))
}

export default handle
