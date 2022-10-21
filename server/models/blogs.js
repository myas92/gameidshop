//ชื่อบทความ (title), เนื้อหาบทความ (content), ผู้เขียน (author), slug(url)
const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin"
    },
    img:{
        type:String,
    },
    slug:{
        type:String,
        unique:true
    }

},{timestamps:true})

module.exports = mongoose.model("Blogs",blogSchema)