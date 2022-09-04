const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Advisor = require("../models/Advisor");
const Student = require("../models/Student");
const verifyUser = require("../models/verifyUser");
const jwt_decode = require("jwt-decode");
const otherFunction = require("../../public/js/otherFunction");
const validation = require("../../public/js/validation");
const VerifyCode = require("../models/verifyUser");
const Course = require("../models/Course");
const Student_Course = require("../models/Student_Course");

/**
 * GET /
 * Homepage
 */
exports.homePageGet = async (req, res) => {
  try {
    res.render("index", { title: "HOME" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

/**
 * login get
 */

exports.login_get = async (req, res) => {
  try {
    res.render("authentication_layout/login", { title: "Login" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

/**
 * login post
 */
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // so every time he logging in he will have different code
    await VerifyCode.deleteMany({ id: user.id });

    const code = otherFunction.randomString(5);
    console.log(code);
    otherFunction.sendEmailLogIn(email, code);

    if (user.id) {
      await verifyUser.findOneAndUpdate(
        { id: user.id },
        { code },
        { upsert: true, new: true }
      );
    }""

    //jwt: we assign token to user
    const token = createToken(user.id, user.role, "Not Verified");

    //jwt with cookie
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    //Response
    res.status(200).json({ user: user.email });
  } catch (error) {
    const errors = validation.handleErrorsLogin(error);
    res.status(400).json({ errors });
  }
};

/**
 * auth get
 */
exports.authenticationPage_get = async (req, res) => {
  try {
    res.render("authentication_layout/authentication", {
      title: "Authentication",
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

module.exports.authenticationPage_post = async (req, res) => {
  try {
    //take jwt from cookie
    const a = req.cookies.jwt;
    //decode jwt
    const decode = jwt_decode(a);
    // search on database for the user we want
    const userCode = await VerifyCode.findOne({ id: decode.id });

    if (req.body.authCode == userCode.code) {
      await VerifyCode.deleteMany({ code: req.body.authCode });

      //jwt: we assign token to user
      const token = createToken(decode.id, decode.role, "Verified");

      //jwt with cookie
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

      res.status(200).json({ userCode });
    } else {
      res.status(400).json({ error: "error" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

/**
 * signup get
 */
module.exports.signup_get = async (req, res) => {
  try {
    //send advisors list to signup page
    const allAdvisor = await Advisor.find({});
    const Advisors = allAdvisor;

    res.render("authentication_layout/signup", {
      title: "RegisterStuff",
      Advisors,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

/**
 * signup post
 */
module.exports.signup_post = async (req, res) => {
  const { email, password, role, firstName, lastName, advisor, semester } =
    req.body;
  try {
    //asynchronous / create user
    const user = await User.create({ email, password, role });
    if (role === "AV") {
      /* await Advisor.create({firstName, lastName }); */

      await Advisor.findOneAndUpdate(
        { id: user.id },
        { firstName, lastName },
        {
          upsert: true,
          new: true,
        }
      );
    }
    if (role === "ST") {
      await Student.findOneAndUpdate(
        { id: user.id },
        { firstName, lastName, semester: semester, advisorId: advisor },
        {
          upsert: true,
          new: true,
        }
      );
    }
    //this function to send email
    otherFunction.sendEmailSignUps(email);
    //201 = successfully created
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = validation.handleErrors(error);
    //400 = error
    res.status(400).json({ errors });
  }
};

/**
 * logout get
 */
module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });

  res.redirect("/");
};

/**
 * studentList get
 */
module.exports.studentList_get = async (req, res) => {
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.find({ id: decode.id });
  console.log(user[0].id);

  //console search by advisor id
  const allStudent = await Student.find({ advisorId: user[0].id });

  const Students = allStudent;

  res.render("studentList", { title: "student list", Students });
};

/**
 * report get
 */
module.exports.report_get = async function (req, res) {
  const course = await Course.find({});


  res.render("report", { title: "report", course });
};

/**
 * register get
 */
module.exports.register_get = async (req, res) => {
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.findOne({ id: decode.id });

  const student = await Student.findOne({ id: user.id });

  const course = await Course.find({ semester: student.semester });

  res.render("register", { title: "register", course });
};

/**
 * register get
 */
module.exports.register_post = async (req, res) => {
  const { code } = req.body;
  //take jwt from cookie
  const a = req.cookies.jwt;
  //decode jwt
  const decode = jwt_decode(a);
  // search on database for the user we want
  const user = await User.findOne({ id: decode.id });

  const student = await Student.findOne({ id: user.id });

  await Student_Course.insertMany([
    {
      id: student.id,
      code,
    },
  ])
    .then(function () {
      console.log("Data inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  await Course.updateMany({ code: code }, { $push: { id: [student.id] } });

  otherFunction.sendEmailRegister(user.email);

  res.send("inserted course");
};

/**
 * showCourse_Get get
 */
module.exports.showCourse_Get = async (req, res) => {
  try {
    const a = req.cookies.jwt;
    const courseArray = [];
    //decode jwt
    const decode = jwt_decode(a);

    // search on database for the user we want
    const user = await User.findOne({ id: decode.id });

    const StudentCourses = await Student_Course.findOne({ id: user.id });

    const course = await Course.find({ code: StudentCourses.code });
    res.render("showCourse", { title: "show Course", course });
  } catch (err) {
    res.status(500).send("You have no courses");
  }
};

module.exports.UpdateStudent_Get = async (req, res) => {
  try {
    res.render("updateStudent", { title: "update Student" });
  } catch (err) {
    res.status(500).send("You have no courses");
  }
};

/**
 * delete get
 */
module.exports.delete = async (req, res) => {
  await User.deleteMany({ role: "ST" });
  await User.deleteMany({ role: "AV" });
  await Advisor.deleteMany({});
  await Student.deleteMany({});
  await Student_Course.deleteMany({});
  await Course.updateMany(
    { $or: [{ semester: 1 }, { semester: 2 }] },
    { id: [] }
  );
  await VerifyCode.deleteMany({});
  res.send("delete");
};

/**
 * jwt function
 */
const jwt_secret = "Dfdfdfsdfsdfsdfsdfsdfsdfsdcxcsdfs";

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id, role, verify) => {
  return jwt.sign({ id, role: role, verify }, jwt_secret, {
    expiresIn: maxAge,
  });
};

