const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/connection.js');
const controller = require('./controllers/controller.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/lazydish', (req, res) => {
  controller.addRecipe(req.body, (err, data) => {
    if(err) {
      res.status(400).send(err)
    } else {
      res.status(200).send('recipe added')
    }
  })

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

