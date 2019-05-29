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
                title: 'Vicky Cristina Barcelona',
                coords: {
                  coordinates: [
                    2.182662809889837,
                    41.388007193572584
                  ],
                  type: "Point"
                },
                scenePictureUrl: 'https://res.cloudinary.com/dslkk8z2m/image/upload/v1559046396/Film-Trails/nvxprwtxfq09xvk1abma.png',
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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
                user: user._id
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











