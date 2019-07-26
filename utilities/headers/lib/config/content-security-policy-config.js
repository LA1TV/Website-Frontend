const liveOnlyHeading = () => process.env.LIVE
  ? [
    {
      name: 'upgrade-insecure-requests'
    }
  ]
  : []

const devOnlyHeading = () => !process.env.PRODUCTION
  ? [
    {
      name: 'connect-src',
      value: ["'self'"]
    }
  ]
  : []

const contentSecurityPolicyConfig = () => ([
  {
    name: 'default-src',
    value: ["'none'"]
  },
  {
    name: 'script-src',
    value: ["'self'", "'unsafe-inline'"]
  },
  {
    name: 'style-src',
    value: ["'unsafe-inline'"]
  },
  {
    name: 'img-src',
    value: ["'self'"]
  },
  {
    name: 'frame-src',
    value: ['embed.la1tv.co.uk']
  },
  {
    name: 'object-src',
    value: ["'none'"]
  },
  {
    name: 'worker-src',
    value: ["'self'"]
  },
  {
    name: 'manifest-src',
    value: ["'self'"]
  },
  {
    name: 'base-uri',
    value: ["'none'"]
  },
  {
    name: 'form-action',
    value: ["'none'"]
  },
  {
    name: 'frame-ancestors',
    value: ["'none'"]
  },
  ...liveOnlyHeading(),
  ...devOnlyHeading()
])

module.exports = contentSecurityPolicyConfig
