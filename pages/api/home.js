import { la1tvFetcher, homeResolver } from 'utilities/api'

const handle = async ({ query: { amount = '24', offset = '0' } }, res) => {
  const url = `mediaItems?limit=${amount}`

  const { statusCode, body } = await la1tvFetcher({ url })

  if (statusCode !== 200) {
    res.status(statusCode).end(JSON.stringify({ statusCode }))
    return
  }

  const items = await homeResolver(body)

  res.status(statusCode).end(JSON.stringify(items))
}

export default handle
