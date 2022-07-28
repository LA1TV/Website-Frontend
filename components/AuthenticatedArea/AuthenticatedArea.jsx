import React from 'react'
import { useRouter } from 'next/router'
import AuthContext from './context'

const AuthenticatedArea = ({ children, forceLogin = false }) => {
  const router = useRouter()
  const [apikey, setApikey] = React.useState()
  let APIKey = ''
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    APIKey = sessionStorage.getItem('apikey')
    if (forceLogin && APIKey === null) {
      router.push({
        pathname: '/account/login',
        query: {
          callback: router.asPath
        }
      })
    }
    setApikey(APIKey)
  }, [])
  return (
    <AuthContext.Provider value={{ apikey, setApikey }}>
      {children.map((child, key) => <span key={key}>{child}</span>)}
    </AuthContext.Provider>
  )
}

export default AuthenticatedArea
