// Run dotenv
require('dotenv').config();

const BOT_USER_ID = "827329662044733441"; //The user ID of the bot, for use sometimes
const Discord = require('discord.js');
const client = new Discord.Client();

// The prefix for the bot
const PREFIX = "cn.";

// necessary constants
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
    if (msg.author.id == BOT_USER_ID) return;   // dont reply to yourself
    // Detect prefix
    if (msg.content.substr(0, 3) == PREFIX) {
        msg.content = msg.content.substr(3);    // trim message

        /**
         * PING METHOD: mostly for debug
         * @return pong
         */

        const substring = msg.content.split(); //Split the command into an array of args
        const command = msg.content.slice(0,1); //Get the command

        if(command == "make") { //Make the board
            const boardSize = substring.slice(1, 2); // Get the number argument
            msg.channel.send(printBoard(boardSIze)); //Print the board

            
        }
    


        
    }
});



function printBoard(inputNumber) {
    var fs = require("fs");

    fs.readFile('standard.txt', 'utf8', function(err, data) {
        if(err) {
            return console.log(err);
        }
        var words = data.split(" "); // Store the words in an array
        
        const board;

        for(const i = 0; i < inputNumber; i++) {
            const index = Math.floor(Math.random() * inputNumber); //Get a random number = the amount of words in the text file
            board.push(words.slice(index, index + 1)); // Get a random word

        }

        for(var word in board) {
            return board.channel.send(word);  //Send the words
        }

    });


}

function customWord() {

}

client.login(process.env.DISCORD_TOKEN);