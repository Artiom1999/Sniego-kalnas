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
