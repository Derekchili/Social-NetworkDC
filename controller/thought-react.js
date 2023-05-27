const Thought = require('../models/Thoughts');

// this route is a asynchronous function that retrieves thoughtId creates a new object newReact
const updateReact = async (req,res)=>{
    try{
        const thoughtId = req.params.thoughtId;
        const newReact = {
            reactionBody: req.body.reactionBody,
            userName: req.body.userName,
        };
        const thought = await Thought.findOneAndUpdate({_id:thoughtId},{$addToSet:{reactions:newReact}},{new:true, runValidators: true});
        return res.json(thought);
    }catch (err){
        console.log(err);
        return res.status(500).json({ msg: 'Error', err: err});
      }
};

// this route is a asynchronous function that retrieves thoughtId and reactId and deletes the object from react array 
const deleteReact = async (req,res)=>{
    try{
        const thoughtId = req.params.thoughtId;
        const reactId = req.params.reactId;
        const data = await Thought.findOneAndUpdate({_id:thoughtId},{$pull:{react:{_id:reactId}}},{new:true})
    
    return res.json(data);
}catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
module.exports = {deleteReact,updateReact};