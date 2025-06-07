const express = require("express");
const skisController = require("../controllers/skiController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/brands", skisController.getBrands);
router.get("/", skisController.getSkis);
router.get("/:id", skisController.getSkiById);

router.post("/", authMiddleware, skisController.createSki);
router.put("/:id", authMiddleware, skisController.updateSki);

module.exports = router;
