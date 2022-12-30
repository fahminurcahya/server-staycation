import mongoose from "mongoose";

const imageShema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageShema);
