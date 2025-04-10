
import mongoose, {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
});

const User = models.User || model('User', userSchema);

export default User;
