exports.run = async (client, message) => {

    message.channel.send(`📡 ** \`-\` Ping :** **${client.ws.ping}ms !**`)

};
