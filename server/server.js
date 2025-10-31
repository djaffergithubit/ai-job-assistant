const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")
const cookieParser = require("cookie-parser")
const { Connect } = require("./dbConfig")
require("dotenv").config()

Connect()
const upload = multer({ dest: "uploads/" }); 

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello world!")
})

app.use("/auth", require("./routes/authRoute"))
app.use("/candidates",upload.single("file") , require("./routes/candidateRoute"))
app.use("/users", require("./routes/usersRoute"))

app.listen(4000, () => {
    console.log("server running on port 4000");
})