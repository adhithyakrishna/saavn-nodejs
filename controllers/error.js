exports.get404 = (req, res, next) => {
  res.status(404).send({"error": "404 not found"});
};
 