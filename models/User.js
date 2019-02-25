const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  displayName: String,
  firstName: String,
  lastName: String,
  avatar: String
});

mongoose.model('User', userSchema);
