const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const appointmentRoute = require("./routes/appointments");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");
const editRoute = require("./routes/personal");

const multer = require("multer");
const path = require("path");

/* setting up the configurations for connection */
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/userimages", express.static(path.join(__dirname, "/userimages")));

/* mongodb connection */
mongoose
  .connect(process.env.MONNGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to to MongoDB"))
  .catch((err) => console.log(err));

/* storing of images of posts */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

// storing image of user
const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "userimages");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploads = multer({ storage: storages });
app.post("/api/uploads", uploads.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

/* all the paths */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);
app.use("/api/personal", editRoute);

/* starting the server */
app.listen("5001", () => {
  console.log("backend is running");
});
