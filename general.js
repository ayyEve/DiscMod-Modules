const DiscMod = require("discmod");
const mod = new DiscMod.Module("General");
const eightBallMessages = [
    "It is certain", "It is decidedly so",
    "Without a doubt", "Yes, definitely",
    "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good",
    "Yes", "Signs point to yes",
    "Reply hazy try again", "Ask again later", 
    "Better not tell you now", "Cannot predict now", 
    "ask again", "Don't count on it", 
    "My reply is no", "My sources say no", 
    "Outlook not so good", "Very doubtful"
];

// _ing _ong
mod.on('command', msg => {
    if (msg.content.endsWith("ing")) {
        const str = msg.content.split("ing").join("ong");
        msg.channel.send(str);
    }
});

// heads or tails
mod.addCommand('flip', msg => {
    msg.reply(`I flip ${randomIndex(['Heads', 'Tails'])}!`);
});

// dice roll
mod.addCommand('roll', msg => {
    msg.reply(`Rolled ${Math.floor(Math.random() * 100)}`);
});

// 8 ball
mod.addCommand('8ball', msg => {
    msg.reply(randomIndex(eightBallMessages));
});

function randomIndex(array) {
    const num = Math.floor(Math.random() * array.length);
    return array[num];
}

module.exports = mod;