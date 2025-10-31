const { default: mongoose } = require("mongoose")

const Connect = async () => {
    await mongoose.connect(process.env.MONGO_URl)
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {Connect}