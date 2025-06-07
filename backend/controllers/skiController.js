// Controller - valdo logikam kaip reaguoti i API uzklausas/requestus ir kreipiasi i Model jeigu atitinka business logika
const Ski = require("../models/skiModel");

exports.getSkis = async (req, res) => {
  try {
    const skis = await Ski.find();
    res.status(200).json(skis);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch skis" });
  }
};

exports.getSkiById = async (req, res) => {
  const skiId = req.params.id;
  try {
    const ski = await Ski.findById(skiId);

    if (!ski) {
      return res.status(404).json({ message: "Ski not found!" });
    }

    res.json(ski);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch ski" });
  }
};

// Create a new ski (admin only)
exports.createSki = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized. Admin access required." });
    }

    const newSki = new Ski(req.body);
    await newSki.save();

    res.status(201).json({ message: "Ski created successfully", ski: newSki });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create ski", error: error.message });
  }
};

// Update ski information (admin only)
exports.updateSki = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized. Admin access required." });
    }

    const skiId = req.params.id;
    const updates = req.body;

    const ski = await Ski.findByIdAndUpdate(skiId, updates, { new: true });

    if (!ski) {
      return res.status(404).json({ message: "Ski not found!" });
    }

    res.status(200).json({ message: "Ski updated successfully", ski });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update ski", error: error.message });
  }
};
