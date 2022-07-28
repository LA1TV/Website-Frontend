import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { code } }, res) => {
  const url = '/v1/accounts/exchangeToken'

  const { statusCode, responseBody } = await la1tvFetcher({ url, method: 'POST', formData: { authtoken: code } })
  console.log(statusCode, responseBody)
  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
