const express = require("express");
const app = express();
const cors = require("cors");
const assessmentRoute = require("./assessmentRoute.js");

app.use(express.json());
app.use(cors());
app.use(express.static("./src/server/public"));

app.use("/", assessmentRoute);

// Add your routes here
// Example - app.use("/api/students", studentRouter);

app.get("/test", (req, res) => {
  res.send("It works!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
