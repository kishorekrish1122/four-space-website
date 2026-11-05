import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.js'
import propertyRoutes from './routes/properties.js'

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is missing in the .env file')
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

// Security headers (the setting lets your website load photos from this server)
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }))

// Only your own website may call this server
app.use(cors({ origin: process.env.CLIENT_URL }))

app.use(express.json({ limit: '1mb' }))

// Uploaded photos are served from here
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/auth', authRoutes)
app.use('/api/properties', propertyRoutes)

// Unknown address
app.use((req, res) => res.status(404).json({ message: 'Not found' }))

// One place that turns every error into a clean reply
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message).join(', ')
    return res.status(400).json({ message })
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid value sent' })
  }
  if (err.name === 'MulterError' || /images are allowed/.test(err.message)) {
    return res.status(400).json({ message: err.message })
  }
  console.error(err)
  res.status(500).json({ message: 'Something went wrong on the server' })
})

const PORT = process.env.PORT || 5000

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => {
    console.error('Could not start the server:', error.message)
    process.exit(1)
  })