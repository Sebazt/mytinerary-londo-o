

const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
  imageactivity1: { type: String, required: true },
  tittle1: { type: String, required: true },
  imageactivity2: { type: String, required: true },
  tittle2: { type: String, required: true },
  imageactivity3: { type: String, required: true },
  tittle3: { type: String, required: true },
  itinerary: { type: String, required: true },
})


const Activities= mongoose.model('activities', activitiesSchema)
module.exports = Activities
