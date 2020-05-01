var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});

client.end();
