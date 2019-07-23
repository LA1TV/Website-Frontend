import fetch from 'isomorphic-unfetch'
require('dotenv').config()

const handle = async ({ query: { videoId } }, res) => {
  const url = `https://www.la1tv.co.uk/api/v1/mediaItems/${videoId}`

  const la1tv = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.LA1TV_API_KEY
    }
  })

  const response = await la1tv.json()

  const parsedResponse = {
    name: response.data.mediaItem.name
  }

  res.send(parsedResponse)
}

export default handle
