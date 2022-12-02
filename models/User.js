const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: [validateEmail, 'please enter a valid email'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter a valid email']
    },
    thoughts: {
      //type: [_id],

    },
    friends: {
      // type: [_id],
      //reactionSchema
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
