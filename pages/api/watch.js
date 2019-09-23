import { la1tvFetcher } from 'utilities/api'

const parseResponse = ({ mediaItem: { name, embed: { iframeUrl } } }) => ({
  name,
  embed: iframeUrl
})

const handle = async ({ query: { videoId } }, res) => {
  const url = `mediaItems/${videoId}`

  const { statusCode, body } = await la1tvFetcher({ url, parser: parseResponse })

  res.status(statusCode).end(body)
}

export default handle
