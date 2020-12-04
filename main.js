const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

client.once('ready', () => {
    console.log("Stevano's bot is now online");
});

client.on('message', message =>{
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
//yt commands
if (command === 'ytchannel'){
    message.channel.send('visit our channel at https://www.youtube.com/channel/UCVERAawj2plnbbtV56fhXnQ/videos!');
} else if (command === 'holiday'){
    message.channel.send('https://www.youtube.com/watch?v=9vMLTcftlyI')
} 
//numgen commands
else if (command === 'num.1-10'){
    message.channel.send(Math.floor(Math.random() * 10));
} 
//browser commands
else if (command === "win.open"){
    window.open();
}
//else (chat)
else {
    message.channel.send(command);
}
});







client.login('Nzg0MTY1NDg2NjQ0NDI4ODQx.X8lVBQ.YGfgXf64Bp_l6mcgGRMKTpNSepI');