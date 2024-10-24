const asyncHandler = require("express-async-handler");
const authModel = require("../models/authModel");
const bcryptjs = require("bcryptjs");
const { authUserFunc, tokenFunc } = require("../utilities/authUserFunc");
const { sendMailFunc } = require("../utilities/sendmailUtilities");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const registerContrl = asyncHandler(async (req, res) => {
  
 const {firstName,lastName,email,password, userName, role } = req.body

 const existUser = await authModel.findOne({email})

 if(existUser){

    res.status(500)
    throw new Error('user exist pls register')

      // res.json({
      //   success: true,
      //   message: `failed to load`
      // })
 }
   
   //create newUsers
   const NewUsers = await authModel.create({
     
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
      role

   })

  if (!NewUsers) {
    res.status(500);
    throw new Error("invalid credentials ");
   
  }

  res.json({
    NewUsers
  });


});



const loginContrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // if (!email && !password) {
  //   res.status(500);
  //   throw new Error("fields cannot be empty");
  // }

  //  const authUser = await

  const user = await authModel.findOne({ email });

  if (user && (await bcryptjs.compare(password, user.password))) {
    const storeToken = await tokenFunc(user._id);
    res.cookie("token", storeToken, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });

    res.json({
      //  firstName: user.firstName,
      message: `welcome ${user.firstName}`,
    });
  } else {
    res.status(500);
    throw new Error("email or password does not match ");
  }
});

const userProfile = asyncHandler(async (req, res) => {
  const { firstName } = await authModel.findById(req.createdUser.id);

  res.json({
    message: `welcome to your dashboard ${firstName}`,
  });
});


const forgotPassCtrl = asyncHandler ( async(req,res)=> {
  const {email} = req.body
  const user = await authModel.findOne({email})
  
   if(!user){
    res.status(500)
    throw new Error('info does not exist pls register')
   }

   //generate token
   const token = await user.tokenGenFunc()
  // console.log(token)
  //save
  await user.save()

  //create url
  const url = `http://localhost:3000/resetpassword/${token}`
  //send message 
  const message = `
    <h2>you have requested for a password reset</H2>
    <p>please click this link to reset your password</p>
    <a herf=${url} clicktracking=off>${url}</a>
  `
  
 const msg = await sendMailFunc({
    to: user.email,
    subject: 'password reset',
    html: message
    
  })
   
   res.status(200)
   res.json({message: 'email sent '})

     if(!msg){ 
      
      user.resetPasswordToken = undefined
      user.resetPasswordExpires = undefined
      await user.save()
      res.status(500)
      throw new Error('email cannot be sent.')


     }

})



const resetPassCtrl = asyncHandler ( async(req,res)=> {
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex')
  const user = await authModel.findOne({
  resetPasswordToken,
  resetPasswordExpires: {$gt: Date.now() }

  })

   if(!user){
    res.status(500)
    throw new Error('token not valid')

   }

   user.password = req.body.password,
   user.resetPasswordToken = undefined,
   user.resetPasswordExpires = undefined,
   await user.save()

   res.status(201)
   res.json({
    message: 'password reset successfully.'
   })

})






const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");

  res.json({
    message: ` you have looged out `,
  });
});

module.exports = {
  registerContrl,
  loginContrl,
  userProfile,
  logoutUser,
  forgotPassCtrl,
  resetPassCtrl
};
