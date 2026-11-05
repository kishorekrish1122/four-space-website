import { Router } from 'express'
import jwt from 'jsonwebtoken'
import rateLimit from 'express-rate-limit'
import User from '../models/User.js'
import { wrap } from '../utils/wrap.js'

const router = Router()

// Blocks password guessing: 10 tries per 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many attempts, please try again later' },
})

router.post(
  '/login',
  loginLimiter,
  wrap(async (req, res) => {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = await User.findOne({ email: String(email).toLowerCase().trim() })
    const ok = user && (await user.comparePassword(String(password)))

    // Same message for both cases, so attackers can't tell which part was wrong
    if (!ok) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    })

    res.json({ token, user: { email: user.email, role: user.role } })
  })
)

export default router