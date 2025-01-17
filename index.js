require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size });
});

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
