let express = require('express');
let router = express.Router();

const Location = require('./../models/location.js');


router.post('/add', (req, res) => {
  const { title, coords, scenePictureUrl } = req.body;

  if (!title || !coords || !scenePictureUrl) {
    res
      .status(422)
      .json({ message: 'There is not all the necessary information' });
  }
  else if (!req.session.currentUser) {
    res
      .status(422)
      .json({ message: 'User not logged in' });
  }
  else {
    const user = req.session.currentUser._id;
    Location.create({ user, title, coords, scenePictureUrl })
      .then((locationObject) => {
        res
          .status(200)
          .json(locationObject);
      })
      .catch((err) => console.log("Error crating Location-----> " + err));
  }
});

module.exports = router;