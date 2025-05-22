const express = require("express");
const skisController = require("../controllers/skiController");

const router = express.Router();

router.get("/", skisController.getAllSkis);

router.post("/", skisController.createSki);

module.exports = router;
