const Discord = require("discord.js")
const axios = require("axios");
const client = new Discord.Client({intents:[Discord.Intents.FLAGS.DIRECT_MESSAGES,Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MESSAGES]});
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
const prefix = "-"
client.on("message",msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) {return }
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case 'ping':{
            msg.channel.send('pong!')
            break
        }
        case 'walter':{
            msg.channel.send('alto facha')
            break
        }
        case 'decker':{
            msg.channel.send('anda caido')
            break
        }
        case 'bryan':{
            msg.channel.send('simio')
            break
        }
        case 'jose':{
            msg.channel.send('josex')
            break
        }
        case 'sebas':{
            msg.channel.send('furro')
            break
        }
        case 'rule34':{
            let url = `https://r34-json-api.herokuapp.com/posts?tags=${args[0]}`
            axios.get(url).then(res => {
                try{
                    let items = res.data
                    let item = items[Math.floor(Math.random()*items.length)];
                    msg.channel.send(item.file_url)
                }
                catch(e){
                    msg.channel.send('No hay ñaño')
                }
            })
            break
        }
        default:{
            return
        }
    }

})

client.login('ODk4MDIwNzAzNDQwMzcxNzEy.YWeI9A.IWkIVjDEybUAh_-N63a_B3zZDV0')

