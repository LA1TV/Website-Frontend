import la1tvFetcher from './la1tv-fetcher'

const getPlaylist = async (ids) => {
  return Promise.all(ids.map(id => la1tvFetcher({ url: `mediaItems/${id}/playlists` })))
}

const homeResolver = async (body) => {
  const ids = body.mediaItems.map(item => item.id)

  const playlists = getPlaylist(ids)

  return playlists
}

export default homeResolver
