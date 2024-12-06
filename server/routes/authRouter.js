const express = require("express");
const { handleUserSignup, handleUser, handleUserLogin, authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/user", authenticateToken, handleUser); // Protected route
router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;