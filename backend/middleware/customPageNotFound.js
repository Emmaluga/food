const notNound = (req, res) => {
  res.status(404).send("page not found");
};

module.exports = notNound;
