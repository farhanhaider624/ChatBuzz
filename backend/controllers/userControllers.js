const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  let { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: "Please Enter all the Fields" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;

    //create a new user
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ error: "Failed to create the User" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

module.exports = { registerUser };
