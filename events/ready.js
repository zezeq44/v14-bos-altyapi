const { ActivityType } = require('discord.js');

module.exports = (client) => {
    console.log(`${client.user.tag} başarıyla aktif edildi!`);
    
    client.user.setPresence({
        activities: [{
            name: "zeze.q | Vasat Dev ",
            type: ActivityType.Playing
        }],
        status: "dnd" 
    });
};
