let express = require('express');
let router = express.Router();
const parser = require('../config/cloudinary');

const Location = require('./../models/location.js');

//POST /location/add
router.post('/add', (req, res) => {
  const { title, coords, scenePictureUrl } = req.body;

  console.log("Body to add -> " + req.body);
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
      .catch((err) => console.log("Error creating Location-----> " + err));
  }
});

//POST /location/add/picture
router.post('/add/picture', parser.single('photo'), (req, res, next) => {
  console.log('file upload');
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  console.log("imageUrl -->  " + imageUrl);
  res.json(imageUrl).status(200);
});





//POST /location/update/:id
router.post('/update/:id', (req, res) => {
  const { title, coords, scenePictureUrl } = req.body;
  const id = req.params.id;

  if (!title || !coords || !scenePictureUrl || !id) {

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

    Location.findOneAndUpdate({ $and: [{ _id: id }, { user: req.session.currentUser._id }] }, { title, coords, scenePictureUrl }, { new: true })
      .then((locationObject) => {
        if (locationObject) {
          res
            .status(200)
            .json(locationObject);
        }
        else {
          res
            .status(200)
            .json({ message: 'This location does not exists' });
        }
      })
      .catch((err) => console.log("Error updating Location-----> " + err));
  }
});



//DELETE /location/delete/:id
router.delete('/delete/:id', (req, res) => {

  const id = req.params.id;

  if (!id) {
    
    res
      .status(422)
      .json({ message: 'There is not an ID' });
  }
  else if (!req.session.currentUser) {

    res
      .status(422)
      .json({ message: 'User not logged in' });
  }
  else {

    const user = req.session.currentUser._id;

    Location.findOneAndDelete({ $and: [{ _id: id }, { user: req.session.currentUser._id }] })
      .then((deletedLocation) => {
        if(deletedLocation){
          res
            .status(200)
            .json({ message: 'Location deleted!' });
        }
        else{
          res
            .status(400)
            .json({ message: 'Could delete location!'});
        }
      })
      .catch((err) => console.log("Error updating Location-----> " + err));
  }
});











//GET /location/:id
router.get('/:id', (req, res) => {

  Location.findById(req.params.id).
  populate('user')
    .then((locationObject) => {
      if (locationObject) {
        res
          .status(200)
          .json(locationObject)
        }
      else{
        res
          .status(400)
          .json({ message: 'This location does not exists' });
      }
    })
    .catch((err) => console.log("Error fetching Location-----> " + err));
});





module.exports = router;