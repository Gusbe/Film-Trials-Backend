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


Location.collection.dropIndexes();


console.log('> Indexes deleted');
Location.remove({})
  .then(() => {
    console.log('> > Locations removed');
    User.remove({})
      .then(() => {
        console.log('> > > Users removed');
        User.create(newUser)
          .then((user) => {
            console.log("> > > > User created: " + user);


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
                scenePictureUrl: 'http://www.alella.cat/ARXIUS/2010_2015/2011/Alella_aeria.jpg',
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
                scenePictureUrl: 'https://www.redaccionmedica.com/images/destacados/una-bacteria-del-agua-del-mar-podria-ser-la-clave-para-tratar-el-melanoma-2097_620x368.jpg',
                user: user._id
              },
              {
                title: 'Lleida',
                coords: {
                  coordinates: [
                    0.6267842,
                    41.6147605
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Lleida_-_La_Seu_Vella_%28des_de_Cappont%29.jpg',
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
                scenePictureUrl: 'https://q-ak.bstatic.com/images/hotel/max1024x768/925/92534567.jpg',
                user: user._id
              },
              {
                title: 'Barcelona',
                coords: {
                  coordinates: [
                    2.1774322,
                    41.3828939
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://img.pixers.pics/pho_wat(s3:700/FO/62/33/72/02/700_FO62337202_19b47c7d33a5f7180483e4a0e38e6b22.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/vinilos-de-barcelona-skyline-panorama-de-la-noche.jpg.jpg',
                user: user._id
              },
              {
                title: 'San Francisco',
                coords: {
                  coordinates: [
                    -122.4199061,
                    37.7790262
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/1920px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg',
                user: user._id
              }
            ];

            Location.create(locationsArray)
              .then(() => {
                console.log(`> > > > > Created ${locationsArray.length} locations`);
                mongoose.connection.close();
              });


















            
          });
      });
  });











