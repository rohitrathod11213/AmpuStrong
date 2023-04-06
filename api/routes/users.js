const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
  const userId = req.body.userId;
  if(userId === req.params.id){
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {new: true });
        res.status(200).json(updatedUser);
    } catch(err){
      res.status(500).json(err);
    }
  } else {
      res.status(401).json('cant update other account');
  }
});

//DELETE
router.put('/:id', async (req, res) => {
  if(req.body.userId === req.params.id){
    try {
      const user = User.findById(req.params.id);
        try {
          await Post.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json('User has been deleted');
        } catch(err) {
          res.status(500).json(err);
        }
    } catch(err) {
        res.status(404).json('user not found!');
    }
  } else {
      res.status(401).json('cant delete other account!');
  }
});
//Get User
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let user;
    if (username) {
      user = await User.find({ username });
    }
    else {
      user = await User.find();
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;