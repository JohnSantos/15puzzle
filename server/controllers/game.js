const { shuffle } = require("./utils");

exports.gameStart = (req, res) => {
  try {
    const board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const shuffled = shuffle(board);

    return res.status(200).json({
      data: shuffled,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
