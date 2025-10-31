const bcrypt = require("bcryptjs")
const User = require("../models/users")
const jwt = require("jsonwebtoken")
const { Resend } = require("resend");
const Token = require("../models/tokens")

const registerController = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        const userExist = await User.findOne({email})
        if (userExist) {
            return res.status(400).json({ "message": "User already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            fullName,
            email, 
            password: hashedPassword
        })

        await newUser.save()

        console.log("user created successfully");
        return res.status(201).json({ "message": "user created successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist)
      return res.status(404).json({ message: "User not found" });

    const matchedPassword = await bcrypt.compare(password, userExist.password);
    if (!matchedPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: userExist._id },
      process.env.SECRET_TOKEN,
      { expiresIn: "1h" }
    );
    
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 3600 * 1000
    });


    return res.status(200).json({ message: "Connected successfully.", user: userExist});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 3600 * 1000
    });

    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const forgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body
    const userExist = await User.findOne({email})

    if (!userExist){
      return res.status(404).json({ message: "Email not found" })
    }

    const token = jwt.sign({userId: userExist._id}, process.env.SECRET_TOKEN, {expiresIn: '15m'})
    const resetLink = `http://localhost:5173/reset-password/${token}`
    const userToken = await Token.findOne({userId: userExist._id})
    if (!userToken) {
      const newToken = new Token({
        userId: userExist._id,
        token: token
      })
      await newToken.save()
    }else{
      userToken.token = token
      await userToken.save()
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Ai Job Assistant <onboarding@resend.dev>",
      to: email,
      subject: "Password Reset",
      html: `
        <p>Click the link below to reset your password (valid for 15 minutes):</p>
        <a href="${resetLink}">${resetLink}</a>
      `
    });

    return res.status(200).json({ message: "Password reset link has been sent to your email." })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const modifyPasswordController = async (req, res) => {
  try {
    const { newPassword, token } = req.body
    const tokenFound = await Token.findOne({token})
    
    if (!tokenFound) {
      return res.status(404).json({ "message": "Token expired or doesn\'t exist" })
    }else if (Date.now() - new Date(tokenFound.createdAt).getTime() > 15 * 60 * 1000){
      console.log("token found", tokenFound);
      console.log("current time", Date.now(), "token time", new Date(tokenFound.createdAt).getTime());
      return res.status(403).json({ "message": "Invalid token." })
    }else{
      const newPasswordHashed = await bcrypt.hash(newPassword, 10)
      const currentUser = await User.findOne({_id: tokenFound.userId})
      currentUser.password = newPasswordHashed
      await currentUser.save()

      return res.status(200).json({ "message": "Password modified successfully." })
    }

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = 
{ 
  registerController, 
  loginController, 
  logoutController,
  forgetPasswordController, 
  modifyPasswordController 
}