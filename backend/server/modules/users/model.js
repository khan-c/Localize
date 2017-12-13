import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UsersSchema = new Schema({
  local: {
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    token: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    }
  }
});

UsersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UsersSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.local.password);
};

export default mongoose.model('User', UsersSchema);
