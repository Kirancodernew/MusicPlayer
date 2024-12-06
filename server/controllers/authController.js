const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// Secret key for signing the JWT (keep it secure, move to environment variables in production)
const JWT_SECRET = "your_jwt_secret_key";

const handleUser = async (req, res) => {
  try {
    const { id } = req.user; // Extract user from token after verification
    const userDetail = await User.findById(id).select("-password"); // Exclude password from the response
    res.status(200).json(userDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleUserSignup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    password = await bcrypt.hash(password, 10);

    // Check if the email already exists
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create the user
    const user = await User.create({ username, email, password });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "Signup successful", token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from the Authorization header
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach user data to the request
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid Token" });
  }
};

module.exports = { handleUserSignup, handleUser, handleUserLogin, authenticateToken };
