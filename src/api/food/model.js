import mongoose from 'mongoose'
var Schema = mongoose.Schema

var foodSchema = new Schema({
  id: String,
  building_id: String,
  name: String,
  short_name: String,
  description: String,
  url: String,
  tags: { type: [String], index: true },
  image: String,
  campus: String,
  lat: Number,
  lng: Number,
  address: String,
  hours: {
    sunday: {
      closed: Boolean,
      open: Number,
      close: Number
    },
    monday: {
      closed: Boolean,
      open: Number,
      close: Number
    },
    tuesday: {
      closed: Boolean,
      open: Number,
      close: Number
    },
    wednesday: {
      closed: Boolean,
      open: Number,
      close: Number
    },
    thursday: {
      closed: Boolean,
      open: Number,
      close: Number
    },
    friday: {
      closed: Boolean,
      open: Number,
      close: Number
    }
  }
})

foodSchema.index({ name: 'text', description: 'text', address: 'text', campus: 'text', tags: 'text' })

export default mongoose.model('foods', foodSchema)
