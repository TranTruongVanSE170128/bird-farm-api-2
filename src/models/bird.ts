import mongoose from 'mongoose'
import { date } from 'zod'

const BirdSchema = new mongoose.Schema({
  name: String,
  birth: Date,
  price: Number,
  sold: Boolean,
  onSale: Boolean,
  description: String,
  specie: { type: mongoose.Schema.Types.ObjectId, ref: 'Specie' },
  gender: { type: String, enum: ['male', 'female'] },
  imageUrls: [String],
  discount : {
       discountPercent : Number, 
       startDate : Date, 
       endDate :Date
  },  
  achievements: [
    {
      competition: String,
      rank: Number
    }
  ],
  breeds: [
    {
      children: { type: [mongoose.Schema.Types.ObjectId], ref: 'Bird' }, //ref
      date: Date
    }
  ],
  parent: {
    dad: { type: mongoose.Schema.Types.ObjectId, ref: 'Bird' },
    mom: { type: mongoose.Schema.Types.ObjectId, ref: 'Bird' }
  }
})

export default mongoose.model('Bird', BirdSchema)
