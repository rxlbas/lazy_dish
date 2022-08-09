const lazydish = require('../../database/schema.js');

exports.addRecipe = (body, cb) => {
  console.log('inside controller.js, req.body is: ', body)
  lazydish.create(body, (err, result) => {
    if(err) {
      cb(err);
    } else {
      cb(null, result)
    }
  })
};