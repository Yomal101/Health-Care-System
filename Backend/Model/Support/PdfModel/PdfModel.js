const mongoose= require("mongoose");
const Schema=mongoose.Schema;

const pdfSchema=new Schema({
    pdf:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,

    },
});

module.exports=mongoose.model(
    "PdfDetails",//file Name
    pdfSchema //function Name
)