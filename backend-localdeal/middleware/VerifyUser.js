const jwt = require("jsonwebtoken");
const VerifyUser = async (req, res, next) => {
  try {
    const id = jwt.verify(
      req.headers.authorization,
      process.env.SECRET || "yourSecretKey"
    );
    if (!id || !id.adminId) {
      return res.status(403).json("Your are not authorize");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = VerifyUser;
