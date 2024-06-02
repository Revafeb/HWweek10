const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute.js")
const movieRoute = require("./movieRoute.js")
const path = require("path")


router.use("/api/images", express.static(path.join(__dirname, "../uploads")))
router.use("/api/user", userRoute)
router.use("/api/movie", movieRoute)



module.exports = router;