// Run dotenv
require('dotenv').config();

const BOT_USER_ID = "827329662044733441"; //The user ID of the bot, for use sometimes
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for message
client.on('message', async msg => {
    if (msg.content == "ping") {
        msg.channel.send("pong!");
    }
});

client.login(process.env.DISCORD_TOKEN);