const Reservation = require("../models/reservationModel");
const Ski = require("../models/skiModel");

// sukuriam rezervacija
exports.createReservation = async (req, res) => {
  try {
    const { skiId, totalDays, startDate, endDate } = req.body;

    // 1. Patikrinam ar zmogus yra autentifikuotas
    const userId = req.user._id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // 2. Patikrinam ar automobilis egzistuoja
    const ski = await Ski.findById(skiId);
    if (!ski) {
      return res.status(404).json({ error: "Ski not found" });
    }

    // 3. Patikrinam ar automobilis yra laisvas pasirinktomis dienomis
    const isSkiAvailable = await Reservation.findOne({
      skiId,
      // $expr - leidzia duoti salygas kurios yra sudetingesnes nei paprastos
      $expr: {
        // $or - leidzia patikrini ar tokia ar kitokia diena yra laisva
        $or: [
          { $gte: ["$startDate", startDate] },
          { $gte: ["$endDate", endDate] },
        ],
      },
    });

    if (isSkiAvailable) {
      return res
        .status(400)
        .json({ error: "Atsiprasome, Slides uzrezervuotos šiomis dienomis" });
    }

    // 4. Paskaiciuojam kiek kainuos rezervacija
    const totalPrice = ski.price * totalDays;

    // 5. Sukuriam rezervacija
    const reservation = new Reservation({
      skiId,
      userId,
      startDate,
      endDate,
      totalPrice,
    });
    await reservation.save();

    res.status(201).json({ message: "Reservation created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create reservation" });
  }
};

// Gaunam vartotojo rezervacijas
exports.getUserReservations = async (req, res) => {
  try {
    const userId = req.user._id;
    const reservations = await Reservation.find({ userId })
      .populate("skiId", "make model image")
      .lean();
    // lean - grazina paprastus JS objektus o ne Mongoose dokumentus

    const formattedReservations = reservations.map((reservation) => ({
      ...reservation,
      ski: reservation.skiId,
      skiId: reservation.skiId._id,
    }));

    res.status(200).json(formattedReservations);
  } catch (error) {
    res.status(500).json({ error: "Failed to get reservations" });
  }
};

// Deleting reservation
exports.deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    await Reservation.findByIdAndDelete(reservationId);
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete reservation" });
  }
};

// Get all reservations (admin only)
exports.getAllReservations = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ error: "Not authorized. Admin access required." });
    }

    const reservations = await Reservation.find()
      .populate("skiId", "make model image")
      .populate("userId", "name email") // Also get user information
      .lean();

    const formattedReservations = reservations.map((reservation) => ({
      ...reservation,
      ski: reservation.skiId,
      skiId: reservation.skiId._id,
      user: reservation.userId,
      userId: reservation.userId._id,
    }));

    res.status(200).json(formattedReservations);
  } catch (error) {
    res.status(500).json({ error: "Failed to get all reservations" });
  }
};
