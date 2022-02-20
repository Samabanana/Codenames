// Run dotenv
require('dotenv').config();

const BOT_USER_ID = "827329662044733441"; //The user ID of the bot, for use sometimes
const Discord = require('discord.js');
const client = new Discord.Client();

// The prefix for the bot
const PREFIX = "cn.";

// necessary constant
const ACTIVE_GAMES = [];

/*
class Game = {
    Guild guild;
    boolean active;
    User redMaster, blueMaster;
    User[] redOps, blueOps;
    String[] wordBank;
}
*/

// When bot is loaded, give initialization message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for message
client.on('message', async msg => {
    if (msg.author.id == BOT_USER_ID) return;   // don't reply to yourself
    // Detect prefix
    if (msg.content.substr(0, 3) == PREFIX) {
        msg.content = msg.content.substr(3);    // trim message

        /**
         * PING METHOD: mostly for debug
         * @return pong
         */
        if (msg.content == "ping") {
            msg.channel.send("pong!");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
