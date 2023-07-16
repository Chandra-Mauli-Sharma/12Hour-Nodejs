const {createClient} = require("redis");

exports.connect = async () => {
    const client = createClient()

    client.on('error', err => console.log('Redis Client Error', err)).on('connect', conn => console.log("Connected to Redis"));

    await client.connect();
}

