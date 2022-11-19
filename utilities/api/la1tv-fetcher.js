import fetch from 'isomorphic-unfetch'

const la1tvFetcher = async ({ url, method = 'GET', formData = false, apikey = null, parser = data => data }) => {
  const requestUrl = (process.env.LA1TV_API_ENDPOINT || process.env.LA1TV_API_ENDPOINT) + url

  if (apikey === null) {
    apikey = process.env.LA1TV_API_KEY || process.env.LA1TV_API_KEY
  }

  let response, statusCode

  try {
    const opts = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apikey
      }
    }
    if (formData) { opts.body = JSON.stringify(formData) }
    const la1tv = await fetch(requestUrl, opts)

    response = await la1tv.json()
    statusCode = la1tv.status
    console.log(response, statusCode)
  } catch (error) {
    console.error(error)
    return {
      statusCode: 404,
      responseBody: 'Not found'
    }
  }

  if (response === undefined) {
    console.log('Got nothing')
    return {
      statusCode: 404,
      responseBody: 'Not found'
    }
  }

  return {
    statusCode: statusCode,
    responseBody: parser(response)
  }
}

export default la1tvFetcher
