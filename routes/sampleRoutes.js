const homeRoute = (req, res) => {
  console.log(`:: request received for '/'`, req.body);
  res.status(200).send("hello world!");
};

module.exports = {
  homeRoute
};
