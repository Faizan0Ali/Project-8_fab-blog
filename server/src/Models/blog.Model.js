const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String
    },

}, { timestamps: true });


module.exports = mongoose.model("Blog", BlogSchema)