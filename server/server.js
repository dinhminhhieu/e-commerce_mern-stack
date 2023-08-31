const express = require("express");
const dotEnv = require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes/index");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  return res.send("Server On");
});
app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
