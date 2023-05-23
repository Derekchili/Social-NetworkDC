const { Schema, model } = require('mongoose');
const dayJs = require('dayjs');

const thoughtSchema = new Schema({
    thoughtText: {
        type:String,
        unique:true,
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
    reactions:{
// mind is toast figure out later Array of nested documents created with the reactionSchema...
    },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;