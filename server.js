'use strict'

const app = require('./bin/express');
const variables = require('./bin/config/variables')

app.listen(variables.api.port, () => {
    console.log(`RESTful API NoFood started successfully on port ${variables.api.port}.`);
});