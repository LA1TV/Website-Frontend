const cacheInSecond = 5256000

const hstsHeader = ['Strict-Transport-Security', `max-age=${cacheInSecond}`]

module.exports = hstsHeader
