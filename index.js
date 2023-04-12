'use strict';

// Start up DB Server
const { db } = require('./src/auth/models/index.js');

const { startup } = require('./src/server.js');

const PORT = process.env.PORT;

db.sync()
  .then(() => {

    // Start the web server
    // require('./src/server.js').start(process.env.PORT);
    startup(PORT);
  });

