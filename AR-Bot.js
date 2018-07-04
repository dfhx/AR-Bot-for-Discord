const Discord = require("discord.js");

const token = "YOUR TOKEN HERE";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("The use of a self-bot is forbidden by Discord, and can result in an account termination if found.");
    console.log("I am not responsible for anything you do with the bot.");
    console.log("Bot made by DSkull, enjoy.");
});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    var args = message.content.substring().split(" ");

    switch (args[0]) {
        default:
        message.channel.send("message you want to send")
    };

});

bot.login(token);
