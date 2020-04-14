const amqp = require('amqplib/callback_api');

amqp.connect('amqp://10.3.56.9', (connErr, connection) => {
    if (connErr) {
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        
        const module = "Mailinglist";
        const exchange = "heartbeat-exchange";

        setInterval(() => {
            const d = new Date();
            console.log(`Heartbeat sent from ${module}, ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
            channel.assertExchange(exchange, 'direct', { durable: false }, () => {
                channel.publish(exchange, "heartbeat", Buffer.from(`<?xml version="1.0" encoding="UTF-8"?><Heartbeat><Sender>${module}</Sender><Timestamp>hh:mm:ss</Timestamp></Heartbeat>`))
            });
        }, 1000);
    });
})