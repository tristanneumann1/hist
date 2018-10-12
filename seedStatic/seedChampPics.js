const Champs = require('../db/models/Champions.js');
const fs = require('fs');
const axios = require('axios');
const picsErred = [];

Champs.find({}, 'image', (err, champsData) => {
  if (err) { console.error(err); } else {
    champsData.forEach((champData) => {
      console.log('image?: ', champData.image.full);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champData.image.full}`)
        .then((pic) => {
          // console.log(pic);
          fs.writeFile(`./images/champions/${champData.image.full}`, pic.data, (err) => {
            if (err) {
              console.error(err);
              picsErred.push(champData.image.full);
            }
            console.log(picsErred, ' pic not Downloaded\n');
          });
        })
    });
  }
});
