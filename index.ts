import DiscordJS, { Intents } from "discord.js"
import WOKCommands from "wokcommands"
import dotenv from "dotenv"
import path from "path"

dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
})

const TEST_SERVER_ID = "953054451999072276"

client.on("ready", () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    typeScript: true,
    testServers: TEST_SERVER_ID,
  })
})

client.login(process.env.TOKEN)
