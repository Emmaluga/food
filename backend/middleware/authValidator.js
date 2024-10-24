const { check, validationResult } = require("express-validator");

exports.reginfoValidated = [
  check("firstName").notEmpty().withMessage("firstName is required"),

  check("lastName").notEmpty().withMessage("lastName is required"),

  check("email").isEmail().withMessage("email is required"),

  check("password")
    .isStrongPassword()
    .withMessage(
      "password must contain at least a capital letter, a small letter, a number, a special symbol"
    ),
],
  exports.loginValidated = [
    check("email").isEmail().withMessage("email is required"),

    check("password")
      .isStrongPassword()
      .withMessage(
        "password must contain at least a capital letter, a small letter, a number, a special symbol"
      ),
  ];

exports.valLogic = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    // return res.status(400).json({error: errors.array()[0].msg})
    return res.status(400).json({ error: errors });
  }

  next();
};
