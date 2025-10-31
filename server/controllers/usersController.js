const getUsersController = async (req, res) => {
  try {
    console.log("In getUsersController");
    console.log("userId", req.userId);
    
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getCurrentUserController = async (req, res) => {
  try {
    const userId = req.userId;
    const userFound = await User.findById(userId).select("fullName email");
    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user: userFound });
  } catch (error) {
    return res.status(500).json({ message: error.message })  
  }
}

module.exports = { getUsersController, getCurrentUserController };