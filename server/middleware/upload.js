import multer from 'multer'
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const uploadDir = path.join(__dirname, '..', 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })

const types = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' }

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  // random name, so nobody can guess it or overwrite another file
  filename: (req, file, cb) =>
    cb(null, `${crypto.randomBytes(12).toString('hex')}${types[file.mimetype]}`),
})

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (types[file.mimetype]) return cb(null, true)
    cb(new Error('Only JPG, PNG, or WEBP images are allowed'))
  },
})