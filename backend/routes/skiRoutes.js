const express = require("express");
const { getSkis, getSkiById } = require("../controllers/skiController");
const router = express.Router();

router.get("/", getSkis);
router.get("/:id", getSkiById);

module.exports = router;
