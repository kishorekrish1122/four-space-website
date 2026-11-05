import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import Property from '../models/Property.js'
import { requireAdmin } from '../middleware/auth.js'
import { upload, uploadDir } from '../middleware/upload.js'
import { wrap } from '../utils/wrap.js'

const router = Router()

/* Only these fields can be set from outside (blocks tampering) */
const ALLOWED = [
  'title',
  'category',
  'status',
  'price',
  'location',
  'areaSqft',
  'description',
  'features',
  'featured',
]

function clean(body) {
  const data = {}
  for (const key of ALLOWED) {
    if (body[key] !== undefined) data[key] = body[key]
  }

  // Forms send lists as text, so turn it back into a list
  if (typeof data.features === 'string') {
    try {
      data.features = JSON.parse(data.features)
    } catch {
      data.features = []
    }
  }

  for (const key of ['price', 'areaSqft']) {
    if (data[key] !== undefined) data[key] = Number(data[key])
  }

  if (data.featured !== undefined) {
    data.featured = data.featured === true || data.featured === 'true'
  }

  return data
}

function removeFile(imagePath) {
  if (!imagePath || !imagePath.startsWith('/uploads/')) return
  fs.unlink(path.join(uploadDir, path.basename(imagePath)), () => {})
}

/* ---------- PUBLIC: anyone can read ---------- */

// GET /api/properties?category=residential&status=sale&limit=3
router.get(
  '/',
  wrap(async (req, res) => {
    const filter = {}
    if (['residential', 'plots', 'commercial'].includes(req.query.category)) {
      filter.category = req.query.category
    }
    if (['sale', 'rent', 'managed'].includes(req.query.status)) {
      filter.status = req.query.status
    }

    const limit = Math.min(Number(req.query.limit) || 100, 100)
    const properties = await Property.find(filter).sort({ createdAt: -1 }).limit(limit)
    res.json(properties)
  })
)

// GET /api/properties/:id
router.get(
  '/:id',
  wrap(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Property not found' })
    }
    const property = await Property.findById(req.params.id)
    if (!property) return res.status(404).json({ message: 'Property not found' })
    res.json(property)
  })
)

/* ---------- ADMIN ONLY: must be logged in ---------- */

router.post(
  '/',
  requireAdmin,
  upload.single('image'),
  wrap(async (req, res) => {
    const data = clean(req.body || {})
    if (req.file) data.image = `/uploads/${req.file.filename}`

    try {
      const property = await Property.create(data)
      res.status(201).json(property)
    } catch (error) {
      if (req.file) removeFile(data.image) // don't keep a photo for a failed save
      throw error
    }
  })
)

router.put(
  '/:id',
  requireAdmin,
  upload.single('image'),
  wrap(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Property not found' })
    }

    const property = await Property.findById(req.params.id)
    if (!property) return res.status(404).json({ message: 'Property not found' })

    Object.assign(property, clean(req.body || {}))

    const oldImage = property.image
    if (req.file) property.image = `/uploads/${req.file.filename}`

    try {
      await property.save()
    } catch (error) {
      if (req.file) removeFile(`/uploads/${req.file.filename}`)
      throw error
    }

    if (req.file) removeFile(oldImage) // replace the old photo
    res.json(property)
  })
)

router.delete(
  '/:id',
  requireAdmin,
  wrap(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Property not found' })
    }
    const property = await Property.findByIdAndDelete(req.params.id)
    if (!property) return res.status(404).json({ message: 'Property not found' })

    removeFile(property.image)
    res.json({ message: 'Property deleted' })
  })
)

export default router