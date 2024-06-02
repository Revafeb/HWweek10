const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController.js")
const multerMiddleware = require("../middlewares/multer.js")

router.get("/", movieController.findAll);
router.get("/:id", movieController.findOne);
router.post("/", movieController.create);
router.post("/uploads", multerMiddleware, movieController.uploadImage);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.destroy);

module.exports = router;