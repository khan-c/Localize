import mongoose, { Schema } from 'mongoose';

const BusinessesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String
  },
  url: {
    type: String
  },
  registered: {
    type: Boolean
  },
  display_phone: {
    type: String,
    required: true
  },
  contact: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String
    }
  },
  location: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    display_address: [
      {
        type: String,
        required: true
      }
    ]
  },
  coordinates: {
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  is_claimed: {
    type: Boolean,
  },
  about: {
    type: String
  },
  photos: [String],
  availability: [
    {
      start: Number,
      end: Number,
      day: Number
    }
  ],
  categories: [
    {
      alias: {
        type: String
      },
      title: {
        type: String
      }
    }
  ],
  lead_time: {
    type: String
  },
  reviews: [
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      review: String,
      date: Date
    }
  ],
  orders: [
    {
      order_id: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
      },
      delivery_date: Date,
      quantity: Number,
      deliverable: String,
      transaction: Number
    }
  ],
  associated_users: [
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      username: String
    }
  ]
});

export default mongoose.model('Business', BusinessesSchema);
