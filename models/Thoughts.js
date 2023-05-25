const { Schema, model } = require('mongoose');
const dayJs = require('dayjs');
const reactionSchema = require('./Reaction')
const thoughtSchema = new Schema({
    thoughtText: {
        type:String,
        required:true,
        maxlength:120,
        minlength:1,
    },
    createdAt: {
        type:Date,
        default:dayJs().format(),
    },
    userName: {
        type:String,
        required:true,
    },
    reactions: [reactionSchema]

// mind is toast figure out later Array of nested documents created with the reactionSchema..have to create a new models file REactions
});

const Thoughts = model('Thought', thoughtSchema);

module.exports = Thoughts;