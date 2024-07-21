import { Schema, model, models } from 'mongoose';

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  disc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,  // Corrected the typo here
    required: true,
  },
}, { timestamps: true }); // Corrected timeseries to timestamps

const foodModel = models.Food || model('Food', foodSchema);

export default foodModel;
