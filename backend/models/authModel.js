const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const crypto = require('crypto')

const authModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,

    userName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user','admin'],
      defaiult: 'user'
    }
  },

  {
    timestamps: true,
  }
);



// hash and save password

authModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcryptjs.hash(this.password, 10);
});



//generate forgotpasstoken 
authModel.methods.tokenGenFunc = async function(){
  const resetToken = crypto.randomBytes(20).toString("hex")

   //hash token and save 
  this.resetPasswordToken =  crypto.createHash('sha256')
  .update(resetToken)
  .digest("hex")

  this.resetPasswordExpires = Date.now() + 10 * (10 * 1000)

  return resetToken 

  
}

module.exports = mongoose.model("users", authModel);
