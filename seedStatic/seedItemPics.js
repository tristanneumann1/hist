const fs = require('fs');
const axios = require('axios');
const Items = require('../db/models/Items.js');
const { version } = require('../Riot/config.js');

Items.find({}, 'image', (err, itemsData) => {
  if (err) { console.error(err); } else {
    itemsData.forEach((itemData) => {
      const file = fs.createWriteStream(`./client/dist/images/items/${itemData.image.full}`);
      axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemData.image.full}`, { responseType: 'stream' })
        .then((pic) => {
          pic.data.pipe(file);

          file.on('finish', () => {
            file.close(() => {
              console.log(itemData.image.full, ' downloaded');
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
