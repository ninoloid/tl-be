const Wishlish = require("../../../models/Wishlish");

const createWishlish = async (input) => {
  return await Wishlish.create(input);
};

const getWishlishs = async () => {
  return await Wishlish.find({});
};

module.exports = {
  createWishlish,
  getWishlishs,
};
