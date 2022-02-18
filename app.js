const fs = require('fs');

const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

//intents
const intents =[
    Intents.FLAGS.GUILDS
] 

// Create a new client instance
const client = new Client({ intents: intents });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);