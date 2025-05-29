const express = require("express");
const skisController = require("../controllers/skiController");

const router = express.Router();

router.get("/", skisController.getAllSkis);

router.post("/", skisController.createSki);

router.get("/:id", skisController.getskibyid);

module.exports = router;
