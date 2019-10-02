import fetch from 'isomorphic-unfetch'
import config from '../../config.json'

const la1tvFetcher = async ({ url, parser = data => data }) => {
  const requestUrl = `https://www.la1tv.co.uk/api/v1/${url}`

  let response

  try {
    const la1tv = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LA1TV_API_KEY || config.env.LA1TV_API_KEY
      }
    })

    response = await la1tv.json()
  } catch (error) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  if (response.data === undefined) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  return {
    statusCode: 200,
    body: parser(response.data)
  }
}

export default la1tvFetcher
