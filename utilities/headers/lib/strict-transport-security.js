const cacheInSecond = 15768000

const hstsHeader = ['Strict-Transport-Security', `max-age=${cacheInSecond}`]

module.exports = hstsHeader
