const Summs = require('../db/models/Summoners');
const fs = require('fs');
const axios = require('axios');
const picsErred = [];

Summs.find({}, 'image', (err, champsData) => {
  if (err) { console.error(err); } else {
    champsData.forEach((summData) => {
      console.log('image?: ', summData.image);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${summData.image.full}`)
        .then((pic) => {
          // console.log(pic);
          fs.writeFile(`./images/summoners/${summData.image.full}`, pic.data, (err) => {
            if (err) {
              console.error(err);
              picsErred.push(summData.image.full);
            }
            console.log(picsErred, ' pic not Downloaded\n');
          });
        });
    });
  }
});
