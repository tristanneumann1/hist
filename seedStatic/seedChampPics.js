const fs = require('fs');
const axios = require('axios');
const Champs = require('../db/models/Champions');
const { version } = require('../Riot/config.js');

Champs.find({}, 'image', (err, champsData) => {
  if (err) { console.error(err); } else {
    champsData.forEach((champData) => {
      const file = fs.createWriteStream(`./images/champions/${champData.image.full}`);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champData.image.full}`, { responseType: 'stream' })
        .then((pic) => {
          pic.data.pipe(file);

          file.on('finish', () => {
            file.close(() => {
            }); // close() is async, call cb after close completes.
          }).on('error', (err) => { // Handle errors
            fs.unlink(file); // Delete the file async. (But we don't check the result)
            console.error(err);
          });
        })
        .catch(err => console.error(err));
    });
  }
});
