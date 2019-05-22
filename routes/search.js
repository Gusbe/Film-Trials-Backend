let express = require('express');
let router = express.Router();

const Location = require('./../models/location.js');



//GET /search/?coords&dist
router.get('/', (req, res) => {
  
  const lat = req.query.lat;
  const lon = req.query.lon;
  const dist = req.query.dist;


  Location.aggregate([
    {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [parseFloat(lon), parseFloat(lat)]
      },
      spherical: true,
      maxDistance: dist,
      distanceField: 'distanceFromAlella'
    }
  }])
  .then( (results) => {
    console.log("Results: " + results);
    res
      .status(200)
      .json(results)
  })
  .catch((err) => console.log(err));



  // Location.find({
  //   coords: {
  //     $geoWithin: {
  //       $centerSphere: [[lon, lat], dist / 6371000]
  //     }
  //   }
  // })
  //   .then( (results) => {
  //     console.log("Results: " + results);
  //     res
  //       .status(200)
  //       .json(results)
  //   })
  //   .catch( (err) => console.log(err) );













  Location.find(
    {
      $geoNear: {
         near: { 
           type: "Point",
           coordinates: [ lon , lat]
         },
         distanceField: "dist.calculated",
         maxDistance: dist,
         spherical: true
      }
    }
   )
    .then( (results) => {
          console.log("Results: " + results);
          res
            .status(200)
            .json(results)
        })
        .catch( (err) => console.log(err) );

});




module.exports = router;