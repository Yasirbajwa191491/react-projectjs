const express = require("express");
const router = express.Router();
const User = require("../schema/UserSchema");
const auth=require("../middleware/auth");
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
  res.send("home page");
});
router.post("/users/signup", async (req, res) => {
  try {
    const { username, phone, email, age, password } = req.body;
    if (!username || !phone || !email || !age || !password) {
      return res.status(422).json({ error: "Please fill all fields" });
    }
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return res.status(422).json({ error: "Invalid credientials" });
    } else {
      const insertData = new User({ username, phone, email, age, password });
      await insertData.save();
      res.status(201).json({ result: "User created" });
    }
  } catch (error) {
    res.status(422).send(error);
  }
});
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data properfly" });
    }
    const check = await User.findOne({ email: email });
    if(!check){
        return res.status(400).json({ error: "Email not matching"})
         }else{
            const verify=await bcrypt.compare(password,check.password);
            const token=await check.generateAuthToken();
            
            
            if(verify){
           return res.status(201).json({"auth-token":token})
            }else{
               return res.status(400).json({error: "invalid login details"})
            }

         }

  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "invalid creientials" });
  }
});
router.post("/users",async (req, res) => {
  const { username, phone, email, age, password } = req.body;
  try {
    if (!username || !phone || !email || !age || !password) {
      return res.status(422).json({ error: "Please fill the data properfly" });
    }
    const data = new User({ username, phone, email, age, password });
    const userData = await data.save();
    res.status(201).send(userData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
});
router.get("/users", async (req, res) => {
  try {
    const data = await User.find({}).select("-password");
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await User.find({ _id: _id });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
});
router.get("/users/:key", async (req, res) => {
  try {
    const data = await User.find({
      $or: [
        { username: { $regex: req.params.key } },
        //    {phone: {$regex: req.params.key}},
        { email: { $regex: req.params.key } },
        //    {age: {$regex: req.params.key}}
      ],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
});
router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await User.findByIdAndDelete(_id);
    if (!data) {
      res.status(404).send({ error: "User not found" });
    } else {
      res.status(200).send({ result: "User Deleted successfully" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/users/:id", async (req, res) => {
  try {
    const { username, phone, email, age, password } = req.body;
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(
      _id,
      {
        username,
        phone,
        email,
        age,
        password,
      },
      {
        new: true,
      }
    );
    if (!user) {
      res.status(404).send({ error: "User Error" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
