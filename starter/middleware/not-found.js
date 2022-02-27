const notFound = (req, res) => res.status(404).send(`the route not found`);

module.exports = notFound;
