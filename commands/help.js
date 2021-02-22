exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: 'Bot Commands' },
            footer:{ text: `Development : 'Shαdow . ᵉʳ#0040`},
            fields: [
                { name: 'Music Orders', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `**Enjoy ! 🤗**`,
        },
    });

};
