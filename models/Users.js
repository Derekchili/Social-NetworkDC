const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    
    userName: { type: String, unique: true, required: true, trimmed: true },

    email: {
        type:String,
        unique:true,
        required:true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },

    thoughts: [{
        type:Schema.Types.ObjectId,
        ref:'Thought'
    }],

    friends: [{
        type:Schema.Types.ObjectId,
        ref:'User',
    }],
});
// User model initialized here
const Users = model('User',userSchema);


module.exports = Users;