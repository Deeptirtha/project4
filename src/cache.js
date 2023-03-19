const redis = require("redis");
const { promisify } = require("util");

//===================================================== Connect to the redis server==============================================================
const redisClient = redis.createClient(13190, "redis-13190.c301.ap-south-1-1.ec2.cloud.redislabs.com");

redisClient.auth("gkiOIPkytPI3ADi14jHMSWkZEo2J5TDG", (err) => {
    if (err) throw err.message;
});

redisClient.on("connect", () => {
    console.log("Redis connnected")
})

const SETEX_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);


module.exports={SETEX_ASYNC,GET_ASYNC}



