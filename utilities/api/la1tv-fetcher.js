import fetch from 'isomorphic-unfetch'
import config from '../../config.json'

const la1tvFetcher = async ({ url, parser = data => data }) => {
  const requestUrl = (process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT) + url

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
    console.log(response)
  } catch (error) {
    console.error(error);
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  if (response === undefined) {
    console.log("Got nothing")
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  return {
    statusCode: 200,
    body: parser(response)
  }
}

export default la1tvFetcher
