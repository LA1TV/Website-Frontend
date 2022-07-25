import fetch from 'isomorphic-unfetch'
import config from '../../config.json'

const la1tvFetcher = async ({ url, method = 'GET', formData = false, parser = data => data }) => {
  const requestUrl = (process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT) + url

  let response, statusCode

  const params = new URLSearchParams()
  if (formData) {
    for (const key in formData) {
      params.append(key, formData[key])
    }
  }
  
  try {
    const la1tv = await fetch(requestUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LA1TV_API_KEY || config.env.LA1TV_API_KEY
      },
      body: JSON.stringify( formData )
    })

    response = await la1tv.json()
    statusCode = la1tv.status
    console.log(response, statusCode)
  } catch (error) {
    console.error(error)
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  if (response === undefined) {
    console.log('Got nothing')
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  return {
    statusCode: statusCode,
    body: parser(response)
  }
}

export default la1tvFetcher
