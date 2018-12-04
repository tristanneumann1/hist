if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
const app = require('./express.js');
const port = process.env.PORT || process.env.port || 3000;
app.listen(port, ()=>console.log('Server listening on port: ', port));
