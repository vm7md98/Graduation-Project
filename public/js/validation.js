/** Email Validation */
const validateEmail = (email) => {
  /**
   * re stand for  (regular expression:)
   */
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/** Password Validation*/
function validatePassword(password) {
  if (password && password.length > 5 && password.indexOf(" ") < 0) {
    return "true";
  } else {
    return false;
  }
}

/** Login Page Validation */
function validateLogin(email, password) {
  if (validateEmail(email) == false) {
    return false;
  } else if (validatePassword(password) == false) {
    return false;
  } else {
    return true;
  }
}

/**
 * handle error |  login_post
 */
const handleErrorsLogin = (err) => {
  let errors = { email: "", password: "" };

  //incorrect email (for login)
  if (err.message === "incorrect email") {
    errors.email = "Email or Password not valid (database level)";
  }
  //incorrect password (for login)
  if (err.message === "incorrect password") {
    errors.password = "Email or Password not valid (database level)";
  }

  if (err.message.includes("user validation failed")) {
    //validation errors
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  console.log(errors);
  return errors;
};

/** Name Validation */
function validationName(Name) {
  if (Name == "" || Name == null) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  handleErrorsLogin,
};
