// // Run dotenv
// require('dotenv').config();

// const BOT_USER_ID = "827329662044733441"; //The user ID of the bot, for use sometimes
// const Discord = require('discord.js');
// const client = new Discord.Client();

// // The prefix for the bot
// const PREFIX = "cn.";

// // necessary constants
// const ACTIVE_GAMES = [];

// /*
// class Game = {
//     Guild guild;
//     boolean active;
//     User redMaster, blueMaster;
//     User[] redOps, blueOps;
//     String[] wordBank;
// }
// */

// // When bot is loaded, give initialization message
// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// // Listen for message
// client.on('message', async msg => {
//     if (msg.author.id == BOT_USER_ID) return; // dont reply to yourself
//     // Detect prefix
//     if (msg.content.substr(0, 3) == PREFIX) {
//         msg.content = msg.content.substr(3); // trim message
//         msg.channel.send(msg.content);
//         /**
//          * PING METHOD: mostly for debug
//          * @return pong
//          */

//         const substring = msg.content.split(" "); //Split the command into an array of args
//         msg.channel.send(substring);
//         const command = substring.slice(0, 1); //Get the command
//         msg.channel.send(command);

//         if (command == "make") { //Make the board
//         msg.channel.send("This shit be working");
//             const boardSize = substring.slice(1, 2); // Get the number argument
//             msg.channel.send(function board(boardSize) {
//                 const fs = require('fs');

//                 fs.readFile('standard.txt', 'utf8', function (err, data) {
//                     if (err) {
//                         return console.log(err);
//                     }

//                     var words = data.split(" ");
//                     const board;

//                     for (const i = 0; i < inputNumber; i++) {
//                         const index = Math.floor(Math.random() * inputNumber); //Get a random number = the amount of words in the text file
//                         board.push(words.slice(index, index + 1)); // Get a random word

//                     }
//                     for (var word in board) {
//                         msg.channel.send(word); //Print the words
//                     }
//                 });
//             });
//         }
//     }
// });




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
        if (msg.content == "make") {
            msg.channel.send("Printing...");
            var board = readThis('standard.txt');
            console.log(board);

            msg.channel.send(board); 
        }
    }
});

 function readThis(thisFile) {

   const fs = require('fs');
   var data = fs.readFileSync(thisFile, 'utf8');
       
    var wordArray = data.split('\n');
    var randIndex = [];
    var codeWords = [];

    while(randIndex.length < 25) {
        
        var i = Math.floor(Math.random() * wordArray.length);

        if(!randIndex.includes(i)) {
            randIndex.push(i);
            codeWords.push(wordArray[i]);
        }
    }

    
    return codeWords; //Return the data

};



client.login(process.env.DISCORD_TOKEN);