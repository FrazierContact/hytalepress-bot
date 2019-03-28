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
    privatemsg : "Welcome to the The Hytale Press Discord Server!",
    publicmsg : "Welcome @MEMBER to the The Hytale Press  Discord Server!",
    publicchannel : "new-members"
    });

//BOT SENSORED WORDS START HERE
bot.on('message', (message) => {

    for (x = 0; x < profanities.length; x++) {
          if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
          message.author.send(`[Hytale Hypress Discord Security] Swearing is not permitted here. Please refrain from swearing! ${message.author}`);
          message.delete();
          return;
      }
    }



//CUSTOM COMMANDS START HERE
    if(message.content == '!invitelink') {
        //message.reply('http://discord.gg/EZmtUGD');
        message.channel.sendMessage('https://discord.gg/ZBUA8NU');
    }
    if(message.content == '!hytalepress') {
        //message.reply('Hello there, I am the official Hytale Network Discord Bot!');
        message.channel.sendMessage('Hello there, I am the official Hytale Press Discord Bot!');
    }
    if(message.content == '!owner') {
        //message.reply('@GoldenSpark1#1259 & @(Matt) Fenzzy#4372');
        message.channel.sendMessage('@Frazier#1259');
    }
    if(message.content == '!help') {
        //message.reply('Need help? Contact a Staff Representative!');
        message.channel.sendMessage('Need help? Contact a Staff Representative!');
    }
    if(message.content == '!hytale') {
        //message.reply('The Hytale Network);
        message.channel.sendMessage('Hytale.com');
    }
});

//BOT LOGIN STARTS HERE
bot.login('NTYwOTYxNzQ4ODA3NzEyNzc5.D37j9w.XkSUiqZC7f8oauw-3HwErJMh-0s');