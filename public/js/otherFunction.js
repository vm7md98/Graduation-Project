const nodemailer = require("nodemailer");

/**
 * Generate random characters | we used in in login_post
 */
function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * SendEmail for login auth | we used in in login_post
 */
const sendEmailLogIn = (email, code) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "registersystemhct@gmail.com",
      pass: "CAPPROJECTEMAIL",
    },
  });

  var mailOptions = {
    from: "registersystemhct@gmail.com",
    to: email,
    subject: "Verify code",
    text: code,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

/**
 * SendEmail for signup | we used in in signup_post
 */
const sendEmailSignUps = (email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "registersystemhct@gmail.com",
      pass: "CAPPROJECTEMAIL",
    },
  });

  var mailOptions = {
    from: "registersystemhct@gmail.com",
    to: email,
    subject: "Register HCT",
    text:
      `You are now registered in the system. Now you can lgoin using this email: ` +
      email,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

/**
 * SendEmail for registerCourse | we used in in register_post
 */
const sendEmailRegister = (email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "registersystemhct@gmail.com",
      pass: "CAPPROJECTEMAIL",
    },
  });

  var mailOptions = {
    from: "registersystemhct@gmail.com",
    to: email,
    subject: "Courses added",
    text: `New courses has ben added`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
/**
 * export the function
 */
module.exports = {
  randomString,
  sendEmailLogIn,
  sendEmailSignUps,
  sendEmailRegister,
};
