const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");

exports.signup = async (req, res, next) => {
  let data = {
    name: req?.body?.name,
    username: req?.body?.username,
    password: req?.body?.password,
    age: req?.body?.age,
    address: req?.body?.address,
    phone: req?.body?.phone,
    role: req?.body?.role,
  };
  try {
    const usernameExist = await User.findOne({
      username: data.username,
      role: data.role,
    });
    if (usernameExist) {
      return next(new ErrorHandler("Username had been existed", 404));
    } else {
      if (data.role === "Patient") {
        data.recordId = req?.body?.recordId;
        await User.create(data)
          .then(() => {
            res.status(200).json("Signup successfully");
          })
          .catch((err) => {
            next(new ErrorHandler(err), 404);
          });
      } else {
        data.license = req?.body?.license;
        await User.create(data)
          .then(() => {
            res.status(200).json("Signup successfully");
          })
          .catch((err) => {
            next(new ErrorHandler(err.message), 404);
          });
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.signin = async (req, res, next) => {
  let data = {
    username: req?.body?.username,
    password: req?.body?.password,
    role: req?.body?.role,
  };
  console.log(data)
  try {
    const userExist = await User.findOne({
      username: data.username,
      role: data.role,
    });
    console.log(userExist);
    if (!userExist) {
      return next(new ErrorHandler("Invalid credentials", 404));
    }

    const matchPassword = await userExist.comparePassword(data.password);
    if (!matchPassword) {
      return next(new ErrorHandler("Invalid credentials", 404));
    }

    generateToken(userExist, 200, res);
  } catch (err) {
    console.log(err);
  }
};

const generateToken = async (user, statusCode, res) => {
  const token = user.jwtGenerateToken();

  // Configure options for the token cookie
  const options = {
    httpOnly: true, // The cookie cannot be accessed by client-side JavaScript
    expiresIn: new Date(Date.now() + process.env.EXPIRE_TOKEN), // Set the expiration date for the cookie
  };

  // Set the status code of the response and add the token cookie
  res.status(statusCode).cookie("token", token, options).json({ token });
};
