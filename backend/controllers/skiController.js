const Ski = require("../models/skiModel");

exports.getAllSkis = async (req, res) => {
  try {
    const skis = await Ski.find();
    res.status(200).json(skis);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch skis" });
  }
};

exports.createSki = async (req, res) => {
  try {
    const newSki = new Ski(req.body);
    await newSki.save();
    res.status(201).json({ message: "Ski created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getskibyid = async (req, res) => {
  try {
    const ski = await Ski.findById(req.params.id);
    if (!ski) {
      return res.status(404).json({ message: "Ski not found" });
    }
    res.status(200).json(ski);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
