const Discord = require('discord.js');
const bot = new Discord.Client();
const profanities = require('profanities');
const moment = require("moment");
const ytdl = require('ytdl-core');
const Welcome = require("discord-welcome");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}, ${bot.user.id}`);
});

//WELCOME
 
Welcome(bot, {
    privatemsg : "Welcome to the The Hytale Network Discord Server!",
    publicmsg : "Welcome @MEMBER to the The Hytale Network  Discord Server!",
    publicchannel : "new-members"
    });

//BOT SENSORED WORDS START HERE
bot.on('message', (message) => {

    for (x = 0; x < profanities.length; x++) {
          if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
          message.author.send(`[The Hytale Network Discord Security] Swearing is not permitted here. Please refrain from swearing! ${message.author}`);
          message.delete();
          return;
      }
    }



//CUSTOM COMMANDS START HERE
    if(message.content == '!invitelink') {
        //message.reply('http://discord.gg/EZmtUGD');
        message.channel.sendMessage('http://discord.gg/EZmtUGD');
    }
    if(message.content == '!hytalenetwork') {
        //message.reply('Hello there, I am the official Hytale Network Discord Bot!');
        message.channel.sendMessage('Hello there, I am the official Hytale Network Discord Bot!');
    }
    if(message.content == '!owners') {
        //message.reply('@GoldenSpark1#1259 & @(Matt) Fenzzy#4372');
        message.channel.sendMessage('@GoldenSpark1#1259 & @(Matt)Fenzzy#4372');
    }
    if(message.content == '!help') {
        //message.reply('Need help? Contact a Staff Representative!');
        message.channel.sendMessage('Need help? Contact a Staff Representative!');
    }
    if(message.content == '!hytale') {
        //message.reply('The Hytale Network);
        message.channel.sendMessage('The Hytale Network');
    }
});

//BOT LOGIN STARTS HERE
bot.login('NTI1NjcyNTM3MzY4Mjk3NDg3.Dy3yfQ.9EYlMZH6HQavf275FjhP8sHI6j4');