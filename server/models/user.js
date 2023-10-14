const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  password: {
    type: String, 
    minLength: [8, 'Minimum password length is 8 characters']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  },
  recordId: {
    type: String
  },
  license: {
    type: String
  },
  role: {
    type: String,
    requried: [true, 'Role is required'],
    enum: ['Patient', 'Doctor']
  }
})

// ENCRYPTING PASSWORD BEFORE SAVING
userSchema.pre('save', async function(next) {
  // ONLY HASH THE PASSWORD IF IT HAS BEEN MODIFIED (OR IS NEW)
  if (!this.isModified('password')) {
    next();
  };

  await bcrypt.hash(this.password,10)
  .then(hash => this.password = hash)
  .catch(err => console.error(err.message));
})

// VERIFY PASSWORD
userSchema.methods.comparePassword = async function(yourPassword) {
  return await bcrypt.compare(yourPassword, this.password);
}

// GET THE TOKEN
userSchema.methods.jwtGenerateToken = function(){
  return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
    expiresIn: 3600
  });
}

module.exports = mongoose.model("User", userSchema);