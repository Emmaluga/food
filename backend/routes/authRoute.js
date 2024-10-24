const express = require("express");
const {
  registerContrl,
  loginContrl,
  userProfile,
  logoutUser,
  resetPassCtrl,
  forgotPassCtrl
} = require("../controllers/authContrl");
const { authenticateUser } = require("../middleware/authMiddleware");
const {
  reginfoValidated,
  loginValidated,
  valLogic,
} = require("../middleware/authValidator");

const authRoute = express.Router();

authRoute.post("/register", reginfoValidated, valLogic, registerContrl);
authRoute.post("/login/", loginValidated, valLogic, loginContrl);
authRoute.get("/userProfile", authenticateUser, userProfile);
authRoute.post("/forgotpassword", forgotPassCtrl);
authRoute.put("/resetpassword/:resettoken",  resetPassCtrl );
authRoute.get("/logout", logoutUser);

module.exports = authRoute;
