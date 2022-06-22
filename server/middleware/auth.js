const jwt = require("jsonwebtoken");
const User=require("../schema/UserSchema");
const SECRET_KEY = "IAMYASIRSOHAILSTUDENTOFGOVTCOLLEGE";
const auth = async(req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).send({ error: "Unauthorized user: no token provided" });
    } else {
      const verify = jwt.verify(token,SECRET_KEY);
      const user=await User.findOne({_id:verify._id, "tokens.token":token})
      req.token=token;
      req.user=user;
      next();
    }
  } catch (error) {
    res.status(401).send({ error: "Unauthorized user: no token provided" });
  }
};
module.exports = auth;
