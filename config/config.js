const config = {
    api: {
        port: process.env.port || 3000
    },
    database: {
        connect: process.env.connection || "mongodb://admin:admin123@ds131903.mlab.com:31903/nofood"
    }
}

module.exports = config;