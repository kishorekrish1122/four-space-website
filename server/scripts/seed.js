import 'dotenv/config'
import mongoose from 'mongoose'
import User from '../models/User.js'
import Property from '../models/Property.js'

const samples = [
  {
    title: 'The Race Course Heritage Villa',
    category: 'residential',
    status: 'sale',
    price: 38500000,
    location: 'Race Course',
    areaSqft: 4200,
    description:
      'Private landscaped courtyard, double-height living hall, modular Italian kitchen, and a dedicated home theatre.',
    features: [
      { icon: 'bed', label: '4 Beds' },
      { icon: 'bath', label: '5 Baths' },
      { icon: 'car', label: '2 Parking' },
    ],
  },
  {
    title: 'Saravanampatti Skyline Residence',
    category: 'residential',
    status: 'rent',
    price: 145000,
    location: 'Saravanampatti',
    areaSqft: 3100,
    description:
      'Fully furnished high-rise residence with panoramic city views, smart security, and a private clubhouse and pool.',
    features: [
      { icon: 'bed', label: '3 Beds' },
      { icon: 'bath', label: '4 Baths' },
      { icon: 'pool', label: 'Pool' },
    ],
  },
  {
    title: 'Avinashi Road Executive Office Floor',
    category: 'commercial',
    status: 'managed',
    price: 82000000,
    location: 'Avinashi Road',
    areaSqft: 9800,
    description:
      'Whole-floor commercial asset with bespoke boardroom finishes, private reception, and high-efficiency HVAC.',
    features: [
      { icon: 'building', label: 'Grade-A' },
      { icon: 'users', label: '60+ Desks' },
      { icon: 'key', label: 'Leased' },
    ],
  },
  {
    title: 'Vadavalli Hillside Estate Plot',
    category: 'plots',
    status: 'sale',
    price: 21000000,
    location: 'Vadavalli',
    areaSqft: 9600,
    description:
      'Premium gated-layout plot near the Western Ghats foothills, with wide approach roads and all utilities ready.',
    features: [
      { icon: 'compass', label: 'East Facing' },
      { icon: 'check', label: 'DTCP Approved' },
      { icon: 'ruler', label: '9,600 sq.ft' },
    ],
  },
]

async function run() {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, MONGODB_URI } = process.env
  if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('Set MONGODB_URI, ADMIN_EMAIL and ADMIN_PASSWORD in the .env file')
  }

  await mongoose.connect(MONGODB_URI)

  const existing = await User.findOne({ email: ADMIN_EMAIL.toLowerCase() })
  if (existing) {
    console.log('Admin already exists, skipped')
  } else {
    await User.create({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
    console.log('Admin created:', ADMIN_EMAIL)
  }

  if ((await Property.countDocuments()) === 0) {
    await Property.insertMany(samples)
    console.log('Sample properties added')
  } else {
    console.log('Properties already exist, skipped')
  }

  await mongoose.disconnect()
}

run().catch((error) => {
  console.error(error.message)
  process.exit(1)
})