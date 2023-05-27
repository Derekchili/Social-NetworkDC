const User = require('../models/Users');

// this is a asynchronous function to update friends to a user
const updateFriend = async(req,res)=>{
    try{
        const userId = req.params.userId
;
const friendId = req.params.friendId;
const user = await User.findOneAndUpdate({_id:userId},{$push:{friends:friendId}});
// await user.friend.push({_id:friendId});
const data = await user.save()
return res.json(data);
    }catch (err){
        console.log(err);
        return res.status(500).json({ msg: 'Error', err: err});
      }
};

// this is a asynchronous function to delete a friend from a user
const deleteFriend = async(req,res)=>{
    try{
        const userId = req.params.userId;
        const friendId = req.params.friendId;
        const data = await User.findOneAndUpdate({_id: userId},{$pull:{friend:friendId}},{new:true});
        return res.json(data);
    }catch (err){
        console.log(err);
        return res.status(500).json({ msg: 'Error', err: err});
      }
};
module.exports = {updateFriend, deleteFriend};