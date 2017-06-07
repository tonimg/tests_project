const mongoose = require('mongoose')
const collection = 'gyms'

const GymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  description: String,
  image: String,
  price: Number
}, { collection })

module.exports = mongoose.model('Gym', GymSchema)
