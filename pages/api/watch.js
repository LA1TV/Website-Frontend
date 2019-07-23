import fetch from 'isomorphic-unfetch'
require('dotenv').config()

const parseResponse = ({ mediaItem: { name, embed: {iframeUrl }}}) => ({
  name, 
  embed: iframeUrl
})

const handle = async ({ query: { videoId } }, res) => {
  const url = `https://www.la1tv.co.uk/api/v1/mediaItems/${videoId}`

  const la1tv = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.LA1TV_API_KEY
    }
  })

  const { data } = await la1tv.json()

  if (data === undefined) {
    res.status(404).send("Video not found :(")
    return
  }

  const parsedResponse = parseResponse(data)

  res.send(parsedResponse)
}

export default handle
