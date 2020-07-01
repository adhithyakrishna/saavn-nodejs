var redis = require('redis');

let isConnected = false;

let redisClient = redis.createClient({
	retry_strategy: function(options) {
		isConnected = false;
		return undefined;
	}
});

redisClient.on("ready", function() {
	isConnected = true;
});

redisClient.on("error", function(error) {
	isConnected = false;
});

exports.redisClient = redisClient;
exports.isConnected = isConnected;
