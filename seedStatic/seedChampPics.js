const fs = require('fs');
const axios = require('axios');
const Champs = require('../db/models/Champions');

Champs.find({}, 'image', (err, champsData) => {
  if (err) { console.error(err); } else {
    console.log('champData: ', champsData[0]);
    champsData.forEach((champData) => {
      console.log('image?: ', champData.image.full);
      const file = fs.createWriteStream(`./images/champions/${champData.image.full}`);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/8.18.1/img/champion/${champData.image.full}`, { responseType: 'stream' })
        .then((pic) => {
          pic.data.pipe(file);

          file.on('finish', () => {
            file.close(() => {
              console.log(champData.image.full, ' downloaded');
            }); // close() is async, call cb after close completes.
          }).on('error', (err) => { // Handle errors
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            console.error(err);
          });
        })
        .catch(err => console.error(err));
    });
  }
});
