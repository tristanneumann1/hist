const fs = require('fs');
const axios = require('axios');
const Summs = require('../db/models/Summoners');

Summs.find({}, 'image', (err, champsData) => {
  if (err) { console.error(err); } else {
    console.log('champData: ', champsData[0]);
    champsData.forEach((summData) => {
      console.log('image?: ', summData.image.full);
      const file = fs.createWriteStream(`./images/summoners/${summData.image.full}`);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/8.18.1/img/spell/${summData.image.full}`, {responseType: 'stream'})
        .then((pic) => {
          pic.data.pipe(file);

          file.on('finish', () => {
            file.close(() => {
              console.log(summData.image.full, ' downloaded');
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
