import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    category: { type: String, enum: ['residential', 'plots', 'commercial'], required: true },
    status: { type: String, enum: ['sale', 'rent', 'managed'], required: true },
    price: { type: Number, required: true, min: 0 },
    location: { type: String, required: true, trim: true },
    areaSqft: { type: Number, required: true, min: 0 },
    description: { type: String, required: true, trim: true, maxlength: 600 },
    image: { type: String, default: '' }, // for example /uploads/abc123.jpg
    features: [
      {
        icon: { type: String, default: 'check' },
        label: { type: String, required: true, trim: true },
      },
    ],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Property', propertySchema)