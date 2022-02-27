const express = require("express");
const router = express.Router();
const webController = require("../controllers/webController");
const {
  requireAuth,
  requireAuthAdmin,
  requireAuthAdvisor,
  requireAuthAdmin_post,
  requireAuthStudent,
  requireAuthLogIn,
  requireAuthVerify,
} = require("../../middleware/authMiddleware");

/**
 * HOME
 */
router.get("/", requireAuth, requireAuthVerify, webController.homePageGet);

/**
 * authentication get
 */

router.get(
  "/authentication",
  requireAuthLogIn,
  webController.authenticationPage_get
);

/**
 * authentication post
 */

router.post("/authentication", webController.authenticationPage_post);

/**
 * login get
 */
router.get("/login", requireAuthLogIn, webController.login_get);

/**
 * login post
 */
router.post("/login", webController.login_post);

/**
 * signup get
 */
router.get("/signup", requireAuth, requireAuthAdmin, webController.signup_get);

/**
 * signup post
 */
router.post(
  "/signup",
  requireAuth,
  requireAuthAdmin,
  requireAuthAdmin_post,
  webController.signup_post
);

/**
 * logout get
 */
router.get("/logout", webController.logout_get);

/**
 * studentList  get
 */
router.get(
  "/studentList",
  requireAuth,
  requireAuthAdvisor,
  webController.studentList_get
);

/**
 * report  get
 */
router.get("/report", requireAuth, requireAuthAdmin, webController.report_get);

/**
 * register  get
 */
router.get(
  "/register",
  requireAuth,
  requireAuthStudent,
  webController.register_get
);

/**
 * register  post
 */
router.post(
  "/register",
  requireAuth,
  requireAuthStudent,
  webController.register_post
);

/**
 * showCourse  get
 */
router.get(
  "/showCourse",
  requireAuth,
  requireAuthStudent,
  webController.showCourse_Get
);

/**
 * UpdateStudent get
 */
router.get(
  "/updateStudent",
  requireAuth,
  requireAuthAdmin,
  webController.UpdateStudent_Get
);

//delete
router.delete("/delete", webController.delete);

module.exports = router;
