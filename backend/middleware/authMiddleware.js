const asyncHandler = require("express-async-handler");
const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");

const authenticateUser = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
   
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

       
      const decoded = jwt.verify(token, process.env.TOKENKEY);
      req.createdUser = await authModel
        .findById(decoded.id)
        .select("-password");

      next();
    } catch (error) {
      res.status(500);
      throw new Error("not authorized to access");
    }

  } else {
    res.status(500);
    throw new Error(" failed completly ");
  }
});

const adminAuth = (req,res,next)=>{
  if(req.createdUser.role === 'user'){ 
    res.status(500);
    throw new Error(" you must be an admin to access this route");
  }
  next() 
}

module.exports = {
  authenticateUser,
  adminAuth
};
