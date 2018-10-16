'use strict'

const app = require('./config/express');
const config = require('./config/config')

app.listen(config.api.port, () => {
    console.log(`RESTful API NoFood started successfully on port ${config.api.port}.`);
});