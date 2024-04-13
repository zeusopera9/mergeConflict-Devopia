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
  email: { type: String, unique: true },
  username: String,
  password: String,
});

const quizResponseSchema = new mongoose.Schema({
  responses: [
    {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      },
      correct: {
        type: Boolean,
        required: true
      }
    }
  ],
  userEmail: {
    type: String,
    required: true
  }
});

const Quiz = mongoose.model("Quiz", quizResponseSchema);
const User = mongoose.model("User", userSchema);

const resultSchema = new mongoose.Schema({
  email: String,
  english: {
    year1: String,
    year2: String,
    year3: String,
  },
  hindi: {
    year1: String,
    year2: String,
    year3: String,
  },
  history: {
    year1: String,
    year2: String,
    year3: String,
  },
  geography: {
    year1: String,
    year2: String,
    year3: String,
  },
  science: {
    year1: String,
    year2: String,
    year3: String,
  },
  maths: {
    year1: String,
    year2: String,
    year3: String,
  },
});

const Result = mongoose.model('Results', resultSchema);


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
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "error", message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fname,
      lname,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ status: "success", user: newUser });
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Email already in use");
    res.status(400).json({ status: "error", error: error.message });
  }
});

// Endpoint to save quiz responses
app.post("/saveQuizResponses", async (req, res) => {
  // Check if the user is logged in
  if (!req.session.email) {
    return res.status(401).json({ status: "error", message: "User not logged in" });
  }

  // Get the email of the currently logged-in user from the session
  const userEmail = req.session.email;

  const { responses } = req.body;
  try {
    // Create a new quiz response document using the 'quizResponseSchema'
    const quizResponse = new Quiz({ userEmail: userEmail, responses: responses });
    await quizResponse.save();

    res.json({ status: "success" });
  } catch (error) {
    console.error("Error saving quiz responses:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});


app.get("/check-login", (req, res) => {
  console.log(req);
  if (req.session.user.email) {
    res.json({ loggedIn: true, email: req.session.user.email });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/uploadResults", async (req, res) => {
  const { email, english, hindi, history, geography, science, maths } = req.body;
  try {
    const result = new Result({
      email,
      english,
      hindi,
      history,
      geography,
      science,
      maths,
    });
    await result.save();
    res.json({ status: "success", result });
  } catch (error) {
    console.error("Error uploading results:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});




app.listen(7000, () => {
  console.log("Server is running on port 7000");
});



