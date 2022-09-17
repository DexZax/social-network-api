const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You must create a username',
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            required: 'you need to provide an email',
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

UserSchema.virtual('FriendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);


module.exports = User;