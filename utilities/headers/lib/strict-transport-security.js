const cacheInSecond = 15768000

const strictTransportSecurityHeader = ['Strict-Transport-Security', `max-age=${cacheInSecond}`]

module.exports = strictTransportSecurityHeader
