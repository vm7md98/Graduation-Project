const jwt = require("jsonwebtoken");
const User = require("../server/models/User");

const jwt_secret = "Dfdfdfsdfsdfsdfsdfsdfsdfsdcxcsdfs";

//check if the current user is register nd assign local variable to use it later
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, jwt_secret, async (error, decodedToken) => {
      if (error) {
        //to get access in our view
        res.locals.user = null;
        next();
      } else {
        let user = await User.findOne({ id: decodedToken.id });
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

//check if user is authenticate or no
const requireAuth = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

//check cant back to login page
const requireAuthLogIn = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, jwt_secret, async (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.verify === "Not Verified") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    next();
  }
};

//check if user is verified or not
const requireAuthVerify = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.verify === "Verified") {
          next();
        } else {
          res.redirect("/authentication");
        }
      }
    });
  } else {
    res.redirect("/authentication");
  }
};

//check if user is authenticate or no for signup page (admin)
const requireAuthAdmin = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "AD") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};

//check if user is authenticate or no for signup page (admin) but this is for third pary program such as postman
const requireAuthAdmin_post = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.send("You are not  authorized to this page");
      } else {
        if (decodedToken.role === "AD") {
          next();
        } else {
          res.send("You are not authorized to this page");
        }
      }
    });
  } else {
    res.send("You are not authorized to this page");
  }
};

//check if user is authenticate or no for studentlist page (advisor)
const requireAuthAdvisor = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;
  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "AV") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};

//check if user is authenticate or no for register page (student)
const requireAuthStudent = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "ST") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};

module.exports = {
  requireAuth,
  checkUser,
  requireAuthAdmin,
  requireAuthAdvisor,
  requireAuthAdmin_post,
  requireAuthStudent,
  requireAuthLogIn,
  requireAuthVerify,
};
//check if user is authenticate or no for signup page (admin)
const requireAuthAd = (req, res, next) => {
  //take the token and store it
  const token = req.cookies.jwt;

  //check if token exists or no and verified
  if (token) {
    jwt.verify(token, jwt_secret, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect("/");
      } else {
        if (decodedToken.role === "AD") {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  } else {
    res.redirect("/");
  }
};
