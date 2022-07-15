const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Add your routes here
// Example - app.use("/api/students", studentRouter);

app.get("/test", (req, res) => {
  res.send("It works!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
