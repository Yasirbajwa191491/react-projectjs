const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FbUser",
        },
    username:{
        type: String,
        required: true
    },
     email: {
            type: String,
            required: true
          },
    message:{
        type: String,
        required: true
    },
  date:{
    type: Date,
    default: Date.now()
  }
});

const Note=mongoose.model("Notes",userSchema);

module.exports=Note;