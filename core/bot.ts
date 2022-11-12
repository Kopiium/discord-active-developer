import { Client, REST, Routes } from "discord.js";
import { Config } from "./config.js";

const rest = new REST({ version: "10" }).setToken(Config.TOKEN);
const client = new Client({
  intents: [],
});

client.on("interactionCreate", (dingus) => {
  dingus.reply("all good!");
});

await client.login(Config.TOKEN);
console.log("Logged in");

await rest.put(Routes.applicationCommands(client.user.id), {
  body: [
    {
      name: "badge",
      description: "gets you the badge",
    },
  ],
});

/**
 * DONT TOUCH THIS UNLESS YOU KNOW WHAT ITS FOR. FOR THOSE WHO ARE CURIOUS, IT'S JUST CODE TO UNDEPLOY SLASHCOMMANDS
 */

// await rest
//   .put(Routes.applicationGuildCommands(Config.clientId, Config.guildId), {
//     body: [],
//   })
//   .then(() => console.log("Successfully deleted all guild commands."))
//   .catch(console.error);

// // for global commands
// await rest
//   .put(Routes.applicationCommands(Config.clientId), { body: [] })
//   .then(() => console.log("Successfully deleted all application commands."))
//   .catch(console.error);
