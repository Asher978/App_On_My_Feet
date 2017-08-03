const Api = require('../models/api');

const apiController = {};

apiController.show = (req, res) => {
  Api.findById(req.params.id)
    .then(api => {
      res.json(api);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};


module.exports = apiController;