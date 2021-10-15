const Discord = require("discord.js")
const axios = require("axios");
require('dotenv').config();
const client = new Discord.Client({intents:[Discord.Intents.FLAGS.DIRECT_MESSAGES,Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MESSAGES]});


const mensajes_personas = {
    "walter":["Alto Fachero","Grande","God","Sexy"]
    ,"decker":["Anda Caido","Ruti no lo ama","piernitas de pollo"]
    ,"bryan":["Simio","Zzzz","Pelado fit","Pelado Sambo"]
    ,"sebas":["Furro","Literalmente un Furro"]
    ,"jose":["Josex","Te va a caer con el FBI","Agente Secreto"]
    ,"ruti":["Ya olvidala socio","Se la comieron 3 manes"]
}


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
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'decker':{
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'bryan':{
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'jose':{
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'sebas':{
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'ruti':{
            let items = mensajes_personas[command]
            let item = items[Math.floor(Math.random()*items.length)];
            msg.channel.send(item)
            break
        }
        case 'pene':{
            msg.channel.send('Le encanta a <@' + msg.author.id + ">")
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

client.login(process.env.TOKEN)

