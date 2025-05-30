const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
    const user = new User({ name, email, password });

    user.save();

    // issaugom useri
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // jai visi laukeliai uzpilditi, nukeliauja i sita funkcija
    res
      .status(201)
      .json({ acces_token: token, message: "user registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Patikriname ar zmogus uzpilde visus input laukelius
    if (!email || !password) {
      return res.json({ error: "All fields are required" });
    }

    // 2. Patikriname ar useris egzistuoja musu duomenu bazeje
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "invaliid credentials" });
    }

    // 3. Patikriname ar slaptazodis sutampa su duomenu bazeje esanciu slaptazodziu
    // Grazins true arba false
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "invaliid email or password" });
    }

    // 4. Sugeneruojame JWT tokena galetu issisaugoti i localStorage
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    // 5. Atidodame tokena zmogui
    res
      .status(200)
      .json({ acces_token: token, message: "logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    // 1. Istraukiam tokena is request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // 2. Patikriname ar tokenas egzistuoja
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // 3.Patikriname ar tokenas yra validus
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Istraukiam userio domenis is domenu bazes
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
