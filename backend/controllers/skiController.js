const Ski = require("../models/skiModel");

const getSkis = (req, res) => {
  res.json(Ski.getAllSkis());
};

const getSkiById = (req, res) => {
  const skiId = req.params.id;
  const ski = Ski.getSkiById(skiId);

  if (!ski) {
    return res.status(404).json({ message: "Car not found!" });
  }

  res.json(ski);
};

module.exports = {
  getSkis,
  getSkiById,
};
