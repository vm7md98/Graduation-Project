const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3000;
const { checkUser } = require("./middleware/authMiddleware");

// to make port dynamic which mean you can use i server port not just host
require("dotenv").config();

//middleware
//parse the url data into object  (ex:eq.body.id)
app.use(express.urlencoded({ extended: true }));

// it take any json data that comes from request and parse it into javascript object so we can use it (ex:eq.body.id)
app.use(express.json());
// To use cookies
app.use(cookieParser());
//so we dont need to write all the public path such as css path
app.use(express.static("public"));

//database
const dbURI =
  "mongodb+srv://abdullah-admin:Abdullah19918@cluster0.hou89.mongodb.net/hctDB";
mongoose.connect(dbURI, {
  /*     useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, */
});

//
app.get("*", checkUser);
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/webRoutes.js");
app.use("/", routes);

app.listen(port, () => console.log("Server start - Listening to port " + port));
