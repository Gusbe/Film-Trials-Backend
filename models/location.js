const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  placeName: { type: String },
  coords: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  scenePictureUrl: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

locationSchema.index({coords: '2dsphere'});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;