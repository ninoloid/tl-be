const bookService = require("../service");

const searchBook = async (req, res) => {
  const result = await bookService.searchBook(req.query);
  return res.status(result.code).json(result);
};

const saveWishlish = async (req, res) => {
  const result = await bookService.saveWishlish(req.body);
  return res.status(result.code).json(result);
};

const getAllWishlishs = async (_, res) => {
  const result = await bookService.getAllWishlishs();
  return res.status(result.code).json(result);
  rn;
};

const init = (router) => {
  router.get("/search", searchBook);
  router.post("/wishlish", saveWishlish);
  router.get("/wishlishs", getAllWishlishs);

  router.get("/", (req, res) => {
    res.status(200).json({
      message:
        "This service is working properly. Use the available endpoint (read the readme), please",
    });
  });
};

module.exports = {
  init,
};
