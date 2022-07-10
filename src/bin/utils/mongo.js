const mongoose = require("mongoose");

const connect = async () => {
  const MONGO_URL =
    process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "staging"
      ? process.env.MONGO_DATABASE_URL
      : process.env.MONGO_DATABASE_URL_LOCAL;

  await mongoose.connect(
    MONGO_URL ||
      "mongodb+srv://travelio:travelio@cluster0.y8fmivn.mongodb.net/travelio"
  );

  return Promise.resolve(mongoose);
};

module.exports = {
  connect,
};
