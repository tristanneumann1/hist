const fs = require('fs');
const axios = require('axios');
const Runes = require('../db/models/Runes');

Runes.find({}, 'icon', (err, runesData) => {
  if (err) { console.error(err); } else {
    console.log('runeData: ', runesData[0]);
    runesData.forEach((runeData) => {
      // console.log('image?: ', runeData);
      const nameArr = runeData.icon.split('/');
      const name = nameArr[nameArr.length - 1];
      const file = fs.createWriteStream(`./client/dist/images/runes/${name}`);
      axios.get(`https://ddragon.leagueoflegends.com/cdn/img/${runeData.icon}`, { responseType: 'stream' })
        .then((pic) => {
          pic.data.pipe(file);

          file.on('finish', () => {
            file.close(() => {
              console.log(runeData.icon, ' downloaded');
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
