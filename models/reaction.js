const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address']
        },
        thoughts: [ThoughtSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
    }
)