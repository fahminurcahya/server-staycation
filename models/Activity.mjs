import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
