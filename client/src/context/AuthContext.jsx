import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import api, { TOKEN_KEY } from '../services/api'

const EMAIL_KEY = 'fs_email'
const AuthContext = createContext(null)

// Reads the expiry time stored inside the token
function isExpired(token) {
  try {
    const part = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    const payload = JSON.parse(atob(part))
    return !payload.exp || payload.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

function readUser() {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token || isExpired(token)) {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(EMAIL_KEY)
    return null
  }
  return { email: localStorage.getItem(EMAIL_KEY) || 'Admin' }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser)

  const login = useCallback(async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem(TOKEN_KEY, data.token)
    localStorage.setItem(EMAIL_KEY, data.user.email)
    setUser({ email: data.user.email })
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(EMAIL_KEY)
    setUser(null)
  }, [])

  // Logs out when the server rejects an old token
  useEffect(() => {
    const onExpired = () => setUser(null)
    window.addEventListener('auth:expired', onExpired)
    return () => window.removeEventListener('auth:expired', onExpired)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}