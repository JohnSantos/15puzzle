const RecordsModel = require("../models/records");

exports.createRecord = async (req, res) => {
  const { name, time, moves } = req.body;

  console.log(name, time, moves);

  try {
    const newRecord = new RecordsModel({
      name,
      time,
      moves,
    });

    console.log(newRecord);

    await newRecord.save();
    console.log("after save");

    return res.status(200).json({
      newRecord,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.getHighScore = async (req, res) => {
  try {
    const orderedRecords = await RecordsModel.find().sort([
      ["time", 1],
      ["moves", 1],
    ]);

    return res.status(200).json({
      orderedRecords,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
