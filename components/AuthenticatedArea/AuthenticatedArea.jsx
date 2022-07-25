import React from 'react'
import { useRouter } from 'next/router'

const AuthenticatedArea = ({ children, forceLogin = false }) => {
  const AuthContext = React.createContext()
  const router = useRouter()
  let APIKey = ''
  React.useEffect(() => {
    APIKey = sessionStorage.getItem('apikey')
    if (forceLogin && APIKey === null) {
      router.push('/account/login')
    }
  }, [])
  return (
    <AuthContext.Provider value={APIKey}>
      {children.map((child, key) => <span key={key}>{child}</span>)}
    </AuthContext.Provider>
  )
}

export default AuthenticatedArea
