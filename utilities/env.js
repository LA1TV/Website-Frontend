import windowEnv from '@beam-australia/react-env'

export default function env (key) {
  var toReturn = process.env['PUBLIC_' + key]
  if (toReturn === undefined) {
    toReturn = windowEnv(key)
  }
  return toReturn
}
