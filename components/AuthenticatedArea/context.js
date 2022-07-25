import { createContext } from 'react'
const AuthContext = createContext({
  apikey: null,
  setApikey: () => {}
})
export default AuthContext
