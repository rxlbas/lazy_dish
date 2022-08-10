const lazydish = require('../../database/schema.js');

exports.addRecipe = (body, cb) => {
  console.log('inside controller.js, req.body is: ', body)
  const { url, recipeName, ingredients } = body
  lazydish.findOneAndUpdate({
    url,
  }, {
    recipeName,
    ingredients,
  }, {
    upsert: true,
  }, (err, result) => {
    if (err) {
      cb(err)
    } else {
      cb(null, result)
    }
  })
};

exports.getAll = (req, res) => {
  lazydish.find({}).exec()
  .then((result) => res.status(200).send(result))
  .catch((error) => res.status(400).send(error))
}

// lazydish.create(body, (err, result) => {
//   if(err) {
//     cb(err);
//   } else {
//     cb(null, result)
//   }
// })