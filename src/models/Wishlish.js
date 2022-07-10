const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    authors: [
      {
        author: {
          type: String,
        },
      },
    ],
    thumbnai: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Wishlists", Schema);
