// controllers/admin.controller.js
export const loginAdmin = (req, res) => {
    const { email, password } = req.body;
  
    // Hardcoded admin credentials (can be stored in .env instead)
    const adminEmail = "admin@example.com";
    const adminPassword = "securepassword"; // Store hashed passwords in production
  
    if (email === adminEmail && password === adminPassword) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  };
  