import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { email } }, res) => {
  const url = '/v1/accounts/initiateLogin'

  const { statusCode, responseBody } = await la1tvFetcher({ url, method: 'POST', formData: { email } })
  console.log(statusCode, responseBody)
  res.status(statusCode).end(JSON.stringify(responseBody))
}

export default handle
