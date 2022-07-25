import { la1tvFetcher } from 'utilities/api'

const handle = async ({ query: { email } }, res) => {
  const url = '/v1/accounts/initiateLogin'

  const { statusCode, body } = await la1tvFetcher({ url, method: 'POST', formData: { email } })
  console.log(statusCode, body)
  res.status(statusCode).end(JSON.stringify(body))
}

export default handle
