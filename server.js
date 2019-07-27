const { createServer } = require('http')
const { parse } = require('url') /* eslint-disable-line node/no-deprecated-api */
const next = require('next')
const setHeaders = require('./utilities/headers')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)

    setHeaders(res)

    app.render(req, res, pathname, query)
  }).listen(port, err => {
    if (err) throw err
    console.log(`🚀 Ready on http://localhost:${port}`)
  })
})
