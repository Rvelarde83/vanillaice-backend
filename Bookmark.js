const mongoose=require("mongoose");

const {Schema, model}= mongoose;

const bookmarkSchema = new Schema({
    title:{type:String , required:true},
    url:{type:String , required:true}
})

const Bookmark= model("Bookmark",bookmarkSchema);
module.exports= Bookmark;
//