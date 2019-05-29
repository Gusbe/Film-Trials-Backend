const mongoose = require('mongoose');

require('dotenv').config();

const Location = require('./../models/location');
const User = require('./../models/user');



mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
}).then(() => {
  console.log(`Connected to database`);
}).catch((error) => {
  console.error(error);
})



Location.find()
  .then((data) => {
    let seed = '';
    data.forEach( (location) => {
      seed += `{
        title: '${location.title}',
        coords: {
          coordinates: [
            ${location.coords.coordinates[0]},
            ${location.coords.coordinates[1]}
          ],
          type: "Point"
        },
        scenePictureUrl: '${location.scenePictureUrl}',
        placeName: '${location.placeName}',
        user: user._id
      },`;
    })

    console.log(seed);

    mongoose.connection.close();
  });
