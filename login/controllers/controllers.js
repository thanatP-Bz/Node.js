const test = require("../models/models");

const createName = async (req, res) => {
  const models = await test.create(req.body);
  res.status(201).json(models);
};

module.exports = {
  createName,
};
