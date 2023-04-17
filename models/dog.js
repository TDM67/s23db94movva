const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_color: String,
dog_breed: {type:String,length:15},
dog_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("dog",dogSchema)