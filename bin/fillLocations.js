const mongoose = require('mongoose');

require('dotenv').config();

const Location = require('./../models/location');
const User = require('./../models/user');

const OMDb = require('./../services/OMDb');



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
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.182662809889837,
                    41.388007193572584
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046396/Film-Trails/nvxprwtxfq09xvk1abma.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.181779408852165,
                    41.38346729994108
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046461/Film-Trails/hjaaikmdlx9luf8f5kcm.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.2032279103900154,
                    41.38706994522921
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046354/Film-Trails/ecga8xmseqkgwwlnpmdc.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1750621045031626,
                    41.383380144269
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046540/Film-Trails/imb4pzqzdaqgidspokuo.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.173647687778422,
                    41.385705727324826
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046730/Film-Trails/nerhfsb2wisbbf2zbidi.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.171533765436155,
                    41.378611732389835
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559048659/Film-Trails/zongacyrq8fnbjzbbr1t.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1726983148864387,
                    41.38181173408345
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046887/Film-Trails/zwrdeeiqtteli4g4bngj.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.153169574338208,
                    41.368966648728836
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049043/Film-Trails/reg3bgpotlqafvgnjuzr.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1656780391402637,
                    41.38202744812142
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559048823/Film-Trails/jjrrgx4h15gyhywwzwrr.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.163990060947538,
                    41.39065424222248
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049121/Film-Trails/yve6zutlzlu9ugnw9z9o.png',
                user: user._id
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1601585757597146,
                    41.368458833577485
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559048989/Film-Trails/igo50kh14ojlpmsiyvdb.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.161939924014111,
                    41.3950833345645
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049242/Film-Trails/flapk95g615mrw0wd49x.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.163918976840924,
                    41.391544768859575
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049178/Film-Trails/szgbdzxkxkh0fjgjzsnn.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1581007638203964,
                    41.39795664449699
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049303/Film-Trails/rihyxfk0jmm3gxqvaa2t.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1748493068942714,
                    41.404185269773784
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049352/Film-Trails/dilfj57yfkrlhkhrzd5s.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.174373398336822,
                    41.412941099354846
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049648/Film-Trails/tr1yfxtg02vlnacyyss0.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1195736091929978,
                    41.38942340221623
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049813/Film-Trails/cco62j0g0yp4kytn82s3.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1210813856042363,
                    41.42118341753176
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049985/Film-Trails/vgwxq3gudidtaoijdcn3.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.117090883938017,
                    41.39761945049111
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049883/Film-Trails/ml7w0djbgxwymzc923s0.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.1525566378847683,
                    41.41377642854701
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049764/Film-Trails/nxuvngugpulewa2hw8uj.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.0745391545839467,
                    41.30255761683259
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559049931/Film-Trails/f9kahwlvc3jvvlaseqfv.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    -5.945166945253428,
                    43.59556073767909
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559050241/Film-Trails/ahnnvlraffnimqslvxuq.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.0975003501051894,
                    41.44958491531883
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559050042/Film-Trails/rznwtnvoj7kvt69ub7c9.jpg',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    -5.923646734157135,
                    43.55476954985652
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559050352/Film-Trails/qyvjidtcr90u2vex5gpf.png',
                user: user._id,
                info: {
                  year: 2008,
                  director: 'Woody Allen',
                  actors: 'Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina',
                  plot: 'Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio\'s free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena.',
                  awards: 'Won 1 Oscar. Another 31 wins & 53 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  website: 'http://www.vickycristina-movie.com/'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -5.989170605185904,
                    37.38286472868774
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559051249/Film-Trails/kvfdgqiwg21eeflwa40b.png',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -4.77803088233577,
                    37.87672835006111
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559051551/Film-Trails/euzhddcbs9wpgzivtxoh.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -1.9092051530927883,
                    36.9416040460739
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559052100/Film-Trails/wckf6l9nle1vsxurjk8k.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -5.882603854251598,
                    39.462127867448636
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559052377/Film-Trails/dvy6ukdnmzovo77jtyvs.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    0.40659001227925884,
                    40.35724533305075
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559052613/Film-Trails/x7utizzfncls99vmrcgx.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    2.8263825351065157,
                    41.988912417076754
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559051748/Film-Trails/zkimrlcwpqbs6b3knqqp.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -2.784624463977479,
                    43.44631472584436
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559052871/Film-Trails/g0h9mttcu0cykhee9gxo.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'Game of Thrones',
                coords: {
                  coordinates: [
                    -1.7059435604887545,
                    40.835704670234534
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559053159/Film-Trails/ag4yz6h8nmbscgs2dkgj.jpg',
                user: user._id,
                info: {
                  year: '2011-2019' ,
                  director: 'N/A',
                  actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
                  plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
                  awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.206625,
                    -33.8646028
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559138214/Film-Trails/js7ugyzvcnhtnzwc5xrd.jpg',
                placeName: 'Wynyard',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.1121985,
                    -33.8069617
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559138506/Film-Trails/thuepi9k3l6a6hsn4vkh.jpg',
                placeName: 'Adam Street Bridge',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.2067515,
                    -33.880653
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559138604/Film-Trails/cersm6fqffjqdoqhwfr6.jpg',
                placeName: 'Pitt Street',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.20732,
                    -33.86785
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559139060/Film-Trails/ezc1msbj9bvigtpajtjy.jpg',
                placeName: 'Colonial State Bank',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.2060959,
                    -33.8650994
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559139462/Film-Trails/cyep43mwmpjwkh20m7dv.jpg',
                placeName: 'Margaret Street',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
                title: 'The Matrix',
                coords: {
                  coordinates: [
                    151.20886544309184,
                    -33.868076713974354
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559139585/Film-Trails/xo7etrlenzrxomywmsoy.jpg',
                placeName: 'Hunter with Pitt Street',
                user: user._id,
                info: {
                  year: '1999',
                  director: 'Lana Wachowski, Lilly Wachowski',
                  actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
                  plot: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans\' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.',
                  awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                  website: 'http://www.whatisthematrix.com'
                }
              },{
              placeName: 'Mount Ngauruhoe',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  175.6343369,
                  -39.1583427
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559205938/Film-Trails/hqtuyzpwuu1lbhgrptmm.jpg',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{
              placeName: 'Matamata, Waikato',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  175.68100000000004,
                  -37.8578
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559206486/Film-Trails/aknnhbnzastbu62xp3x9.jpg',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{
              placeName: 'Kawarau Gorge',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  169.12618878970375,
                  -45.0514170904491
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559206796/Film-Trails/f3jwby9wo42q8hsoonj3.png',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{
              placeName: 'Glenorchy Paradise',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  168.34095,
                  -44.6736167
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559207156/Film-Trails/ulkk5ad0yl74zfpqckhf.jpg',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{
              placeName: 'Takaro Road',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  167.90795,
                  -45.35145
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559207343/Film-Trails/xnjhwezo4qtmzhyq8fjh.jpg',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{
              placeName: 'Queen Elizabeth Park',
              title: 'The Lord of the Rings',
              coords: {
                coordinates: [
                  174.98120342494394,
                  -40.964984839734065
                ],
                type: "Point"
              },
              scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559207718/Film-Trails/yjztok0s7wkibifeveiw.jpg',
              user: user._id,
              info: {
                year: '2001',
                director: 'Peter Jackson',
                actors: 'Viggo Mortensen, Elijah Wood, Ian McKellen, Orlando Bloom, Liv Tyler',
                plot: 'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
                awards: 'Won 4 Oscar and 4 BAFTA',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
                website: 'https://www.warnerbros.com/movies/lord-rings-fellowship-ring'
              }
            },{placeName: 'Passeig Lluis Companys',
            title: 'The last days',
            coords: {
              coordinates: [
                2.1823328380392657,
                41.389724504091475
              ],
              type: "Point"
            },
            scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559209119/Film-Trails/tmurbf9te4zfiarbwhsr.jpg',
            user: user._id,
            info: {
              year: '2013',
              director: 'David Pastor, Alex Pastor',
              actors: 'Quim Gutiérrez, Jose Coronado, Marta Etura, Leticia Dolera',
              plot: '2013. A mysterious epidemic spreads across the planet; humanity develops an irrational fear of open spaces which causes death within seconds. Soon, the entire global populace is trapped ...',
              awards: '8 wins & 6 nominations.',
              poster: 'https://m.media-amazon.com/images/M/MV5BMzY4MTM4MjU4Ml5BMl5BanBnXkFtZTcwNTE4MjgyOQ@@._V1_SX300.jpg',
              website: 'http://www.losultimosdias.es'
            }
          },{placeName: 'Tibidabo',
          title: 'The Machinist',
          coords: {
            coordinates: [
              2.120194763960608,
              41.42124848696604
            ],
            type: "Point"
          },
          scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559209794/Film-Trails/yifdmnaegn8rrqxxjhcm.jpg',
          user: user._id,
          info: {
            year: '2004',
            director: 'Brad Anderson',
            actors: 'Christian Bale, Jennifer Jason Leigh, Aitana Sánchez-Gijón, John Sharian',
            plot: 'An industrial worker who hasn\'t slept in a year begins to doubt his own sanity.',
            awards: '7 wins & 15 nominations.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNjk1NzBlY2YtNjJmNi00YTVmLWI2OTgtNDUxNDE5NjUzZmE0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg',
            website: 'http://www.machinistmovie.com'
          }
        },





















      






            ];










            Location.create(locationsArray)
              .then((data) => {
                console.log(`> > > > > Created ${locationsArray.length} locations`);

                // data.forEach( (element) => {
                //   OMDb.getMovie(element.title)
                //     .then( (info) => {
                //       console.log(info);
                //       Location.findByIdAndUpdate(element._id,{info: info},{new: true})
                //         .then( (data) => {
                //           console.log("change")
                //           console.log(data)
                //         })
                //         .catch( (err) => console.log(err));
                //     })
                //     .catch( (err) => console.log(err));
                // });


                mongoose.connection.close();
              });


















            
          });
      });
  });











