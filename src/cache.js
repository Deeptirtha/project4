const redis = require("redis");
const { promisify } = require("util");

//===================================================== Connect to the redis server==============================================================
const redisClient = redis.createClient(
    13583,
  "redis-13583.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
)
redisClient.auth("wThkPwQq5PIKDAX0vnPVbI0yp0eU6EKo", function (err) {
  if (err) throw err;
})

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
})

//=====================================================Prepare the functions for each command====================================================

const SETEX_ASYNC = promisify(redisClient.SETEX).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);


module.exports={SETEX_ASYNC,GET_ASYNC}