const mongoose = require("mongoose");
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("yes donkey");
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB;
//new cluster bna lete h