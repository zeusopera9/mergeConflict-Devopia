import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import connectDB from "./connectdb.js";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(cors());

connectDB();

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true }, // Ensure uniqueness of email field
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.email = email;
        res.json({ status: "success", user });
        console.log("Logged in successfully!");
      } else {
        res.json({ status: "error", message: "Invalid email or password" });
      }
    } else {
      res.json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error("Login failed:", error.message);
    res.status(500).json({ status: "error", error: error.message });
  }
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, username, password } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "error", message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      fname,
      lname,
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.json({ status: "success", user: newUser });
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Email already in use");
    res.status(400).json({ status: "error", error: error.message });
  }
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});



