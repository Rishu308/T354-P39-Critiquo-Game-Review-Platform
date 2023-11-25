import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
