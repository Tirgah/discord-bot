const Discord = require("discord.js");
const Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("MTA0MDIyMDUwMzU3MjQ4ODIxMg.GEFCWP.3RNlh7loCY2lFaiCst23KxIGNQS7BNZzK0SEo0")