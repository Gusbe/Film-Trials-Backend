let express = require('express');
let router = express.Router();
const {isLoggedIn} = require('./../helpers/middlewares');
const parser = require('../config/cloudinary');

const Location = require('./../models/location.js');
const OMDb = require('./../services/OMDb');

//POST /location/add
router.post('/add', isLoggedIn(),(req, res, next) => {
  const { title, coords, scenePictureUrl, placeName } = req.body;

  console.log("Body to add -> " + req.body);
  if (!title || !coords || !scenePictureUrl) {
    res
      .status(422)
      .json({ message: 'There is not all the necessary information' });
  }
  else {

    OMDb.getMovie(title)
      .then((data) => {
        let info = {};
        if (data.Response !== 'False') {
           info = {
            year: data.Year,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            awards: data.Awars,
            poster: data.Poster,
            website: data.Website
          };
        }
        const user = req.session.currentUser._id;
        Location.create({ user, title, coords, scenePictureUrl, placeName, info })
          .then((locationObject) => {
            res
              .status(200)
              .json(locationObject);
          })
          .catch((err) => next(err));
      })
      .catch((err) => console.log(err));


  }
});

//POST /location/add/picture
router.post('/add/picture', isLoggedIn(), parser.single('photo'), (req, res, next) => {
  console.log('file upload');
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  console.log("imageUrl -->  " + imageUrl);
  res.json(imageUrl).status(200);
});





//POST /location/update/:id
router.post('/update/:id', (req, res, next) => {
  const { title, coords, scenePictureUrl, placeName } = req.body;
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

    Location.findOneAndUpdate({ $and: [{ _id: id }, { user: req.session.currentUser._id }] }, { title, coords, scenePictureUrl, placeName }, { new: true })
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
      .catch((err) => next(err));
  }
});



//DELETE /location/delete/:id
router.delete('/delete/:id', (req, res, next) => {

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
      .catch((err) => next(err));
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
    .catch((err) => next(err));
});











module.exports = router;