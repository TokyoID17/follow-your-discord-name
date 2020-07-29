const Discord = require("discord.js");
const client = new Discord.Client();

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  var discord = client.users.cache.get("YOUR DISCORD ID");
  response.send(discord.tag);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

client.login("YOUR TOKEN DISCORD"); // the bot must have 1 server that is the same as your discord user id (minimum 1)
