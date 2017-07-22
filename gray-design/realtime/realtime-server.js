var io = require('socket.io').listen(3002);
var redis = require('redis');


// Redis does not allow for a client to both, subscribe to a channel and to
// send data to it. So two clients are required.
var redisListener = redis.createClient();
redisListener.subscribe('redis-metric-change-downstream');
var redisSender = redis.createClient();
// redisSender.subscribe('redis-metric-change-upstream');

io.on('connection', function(socket) {
  socket.on('socket-metric-change', function(metric) {
    console.log('SERVER - Received data: ' + metric.data.name);  // DEBUG
    redisSender.publish('redis-metric-change-upstream',
                        JSON.stringify(metric.data));
  });

  redisListener.on('message', function(channel, message) {
    socket.emit('socket-metric-change', JSON.parse(message));
    console.log("MESSAGE: " + message);  // DEBUG
  });
});
