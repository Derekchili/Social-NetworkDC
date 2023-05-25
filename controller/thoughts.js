const Thought = require('../models/Thoughts');
const User = require('../models/Users');

// this is a asynchronous function that gets all thoughts
const getThoughts = async (req,res)=>{
  try{
    const data = await Thought.find();
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};

// this is a asynchronous function that gets a thought by id
const getOneThought = async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await Thought.findById(id);
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};

// this is a asynchronous function that creates a object named newThought and then stores it in the thought var and will push thought into a user by userName.
const createThought = async (req,res)=>{
  try{
    const newThought ={
      thoughtText: req.body.thoughtText,
      userName: req.body.userName,
    };
    const thought = await Thought.create(newThought);
    const userRea = await User.findOneAndUpdate({userName:req.body.userName},{$push:{thoughts:thought._id}});
    return res.json(thought);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};

// this is a asynchronous function that will delete a thought by id
const deleteThought = async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await Thought.deleteOne({_id: id});
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};

// this is a asynchronous function that will update a thought by id
const updateThought = async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await Thought.updateOne({_id: id},{$set:{thoughtText:req.body.thoughtText}});
    return res.json(data);
  }catch (err){
    console.log(err);
    return res.status(500).json({ msg: 'Error', err: err});
  }
};
module.exports = {getThoughts,getOneThought,createThought,deleteThought,updateThought};
