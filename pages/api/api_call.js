import fetch from 'isomorphic-unfetch'
require('dotenv').config()

const api_call = async (query, res) => {
    const url = `https://www.la1tv.co.uk/api/v1/${query}`

    const la1tv = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LA1TV_API_KEY
      }
    })
  
    const { data } = await la1tv.json()
  
    if (data === undefined) {
      res.status(404).send('Video not found :(')
      return
    }

    return data;
}

export default api_call