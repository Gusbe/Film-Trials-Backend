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

const newUser = {
  username: "Gus",
  password: "$2b$10$XNEdZEDl77P7/IllheBzSuZWBKkPoYIqqd.KZt0rsq/4QoN3XxT6W"
};



Location.remove({})
  .then(() => {
    console.log('> Locations removed');
    User.remove({})
      .then(() => {
        console.log('> > Users removed');
        User.create(newUser)
          .then((user) => {
            console.log("> > > User created: " + user);
            
            
            const locationsArray = [
              {
                title: 'Alella',
                coords: {
                  coordinates: [
                    2.294276,
                    41.495287
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'Not yet!',
                user: user._id
              },
              {
                title: 'Costa Garraf',
                coords: {
                  coordinates: [
                    2.222276,
                    41.005287
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'Not yet!',
                user: user._id
              },
              {
                title: 'Lleida',
                coords: {
                  coordinates: [
                    41.6147605,
                    0.6267842
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'Not yet!',
                user: user._id
              },
              {
                title: 'Madrid',
                coords: {
                  coordinates: [
                    -3.703582,
                    40.416705
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'Not yet!',
                user: user._id
              }
            ];

            Location.create(locationsArray)
              .then( () => {
                console.log(`> > > > Created ${locationsArray.length} locations`);
                mongoose.connection.close();
              });

            

















            
          });
      });
  });











