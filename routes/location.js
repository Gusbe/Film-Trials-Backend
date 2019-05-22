let express = require('express');
let router = express.Router();


router.get('/add', (req, res) => {
  console.log('hola');
  res.send('add');
})



module.exports = router;