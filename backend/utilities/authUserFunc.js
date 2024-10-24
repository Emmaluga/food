const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authUserFunc = asyncHandler(async (userData, res) => {
  const storeToken = tokenFunc(userData._id);
  res.cookie("token", storeToken, {
    maxAge: 60 * 60 * 1000,
    secure: true,
    httponly: true,
  });

  
  //   res.json({userData, storeToken})
});

const tokenFunc = async (id) => {
  return jwt.sign({ id }, process.env.TOKENKEY, { expiresIn: 60 * 60 * 1000 });
};

module.exports = {
  authUserFunc,
  tokenFunc,
};
