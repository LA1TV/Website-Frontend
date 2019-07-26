const cacheInSecond = 10

const hstsHeader = ['Strict-Transport-Security', `max-age=${cacheInSecond}`]

module.exports = hstsHeader
