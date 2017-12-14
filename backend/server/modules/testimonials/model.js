import mongoose, { Schema } from 'mongoose';

const TestimonialSchema = new Schema({
  title: {
    type: String
  },
  testimonial: {
    type: String
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business'
  }
});

export default mongoose.model('Testimonial', TestimonialSchema);
