const axios = require("axios");
const { createWishlish, getWishlishs } = require("../repository");

const searchBook = async ({ keyword }) => {
  try {
    const result = await axios.get(process.env.GET_BOOK_URL + keyword);
    const { data } = result;

    const returnedValue = data.items.map((item) => {
      return {
        title: item.volumeInfo.title || undefined,
        author:
          item.volumeInfo.authors && item.volumeInfo.authors.length > 0
            ? item.volumeInfo.authors.join(", ")
            : undefined,
        thumbnail: item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : undefined,
      };
    });

    return {
      error: false,
      code: 200,
      data: returnedValue,
    };
  } catch (err) {
    return {
      error: true,
      code: err.response && err.response.status ? err.response.status : 500,
      message:
        err.response && err.response.statusText
          ? err.response.statusText
          : "Something went wrong",
    };
  }
};

const saveWishlish = async ({ title, author, thumbnail }) => {
  try {
    console.log;
    const authors = author
      ? author.split(", ").map((name) => {
          return {
            author: name,
          };
        })
      : undefined;

    await createWishlish({
      title,
      authors,
      thumbnail,
    });

    return {
      error: false,
      code: 201,
      message: "Created",
    };
  } catch (err) {
    return {
      error: true,
      code: err.response && err.response.status ? err.response.status : 500,
      message:
        err.response && err.response.statusText
          ? err.response.statusText
          : "Something went wrong",
    };
  }
};

const getAllWishlishs = async () => {
  try {
    const result = await getWishlishs();

    return {
      error: false,
      code: 200,
      data: result,
    };
  } catch (err) {
    return {
      error: true,
      code: err.response && err.response.status ? err.response.status : 500,
      message:
        err.response && err.response.statusText
          ? err.response.statusText
          : "Something went wrong",
    };
  }
};

module.exports = {
  searchBook,
  saveWishlish,
  getAllWishlishs,
};
