const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

connectDB();

app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
  );
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
