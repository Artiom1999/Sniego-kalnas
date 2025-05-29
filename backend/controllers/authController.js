const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    // issitraukiam is request body - name, email, password.
    const { name, email, password } = req.body;

    // jai nera - name, email arba password ,nukeliauja i sita funkcija
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // tikrinam ar neegzistuoja useris su tokiu email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "invaliid credentials" });
    }

    // sukuriam nauja useri
    const newUser = new User({ name, email, password });

    newUser.save();

    // jai visi laukeliai uzpilditi, nukeliauja i sita funkcija
    res.status(201).json({ message: "sekmingai registravote" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
