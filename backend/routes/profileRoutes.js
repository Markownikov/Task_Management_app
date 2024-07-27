const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");
const { verifyAccessToken } = require("../middleware/index");

// Routes beginning with /api/profile
router.get("/", verifyAccessToken, getProfile);

module.exports = router;
