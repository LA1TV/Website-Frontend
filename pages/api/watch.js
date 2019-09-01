import api_call from './api_call'

const parseResponse = ({ mediaItem: { name, embed: { iframeUrl } } }) => ({
  name,
  embed: iframeUrl
})

const handle = async ({ query: { videoId } }, res) => {
  const url = `mediaItems/${videoId}`

  await api_call(url).then((data) => {
    const parsedResponse = parseResponse(data)
    res.send(parsedResponse)
  }).catch((err) => {
    console.log(err)
    res.status(404).send(err)
  })  
}

export default handle
