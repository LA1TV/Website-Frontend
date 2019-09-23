import fetch from 'isomorphic-unfetch'

const la1tvFetcher = async ({ url, parser = data => data }) => {
  const requestUrl = `https://www.la1tv.co.uk/api/v1/${url}`

  let data

  try {
    const la1tv = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LA1TV_API_KEY
      }
    })

    data = await la1tv.json().data
  } catch (error) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  if (data === undefined) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }

  return {
    statusCode: 200,
    body: parser(data)
  }
}

export default la1tvFetcher
