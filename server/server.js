const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")
require("dotenv").config()

const upload = multer({ dest: "uploads/" }); // temp folder

app.use(cors({
    origin: "*"
}))
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello world!")
})

app.use("/candidates",upload.single("file") , require("./routes/candidateRoute"))

app.listen(4000, () => {
    console.log("server running on port 4000");
})