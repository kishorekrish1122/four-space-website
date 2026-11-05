import jwt from 'jsonwebtoken'

// Put this in front of any route that only the admin may use
export function requireAdmin(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null

  if (!token) {
    return res.status(401).json({ message: 'Please log in' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    if (payload.role !== 'admin') {
      return res.status(403).json({ message: 'Admins only' })
    }
    req.user = payload
    next()
  } catch {
    res.status(401).json({ message: 'Session expired, please log in again' })
  }
}