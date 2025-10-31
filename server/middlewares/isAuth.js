const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    
    if (!token)
      return res.status(403).json({ message: "Access forbidden." });

    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = isAuth;