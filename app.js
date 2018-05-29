// Load up the discord.js library
const Discord = require("discord.js");

const fs = require("fs");
// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");

// config.token contains the bot's token

//Set's the prefix for a setaint type of command setup(keep the one in the config.json)


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

  client.user.setActivity("Made by Chill Zone", {type: "STREAMING"});
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("Made by Chill Zone", {type: "STREAMING"});
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity("Made by Chill Zone", {type: "STREAMING"});
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  let prefix = '/';

  if (message.content.toUpperCase() === `${prefix}BOTPING`) {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms` );

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
  }

     if (message.content.toUpperCase() === `${prefix}SHOP-HELP`) {
     let sicon = client.user.displayAvatarURL;
     let Sembed = new Discord.RichEmbed()
    .setDescription("~Shop Commands~")
    .setColor("#6e0303")
    .setThumbnail(sicon)
    .addField("/gta", "Shows the GTA modded account info")
    .addField("/fortnite", "Shows the Fortnite modded account info")
    .addField("/bot", "Shows custom bot info")
    .setFooter("More Possibly Coming Soon");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

      message.channel.send(Sembed)
    }

    if (message.content.toUpperCase() === `${prefix}FUN-HELP`) {

     let ficon = client.user.displayAvatarURL;
     let funembed = new Discord.RichEmbed()
    .setDescription("~Fun Commands~")
    .setColor("#0537ff")
    .setThumbnail(ficon)
    .addField("/8ball", "Says a prediction about what your question is.")
    .addField("/coinflip", "Flips a coin and says either heads or tails.")
    .addField("/roast", "Roasts someone when mentioned")
    .addField("/slam", "Slams mentioned user on the floor!")
    .addField("/slap", "Bitch slaps mentioned user!")
    .addField("/sex", "I'm not even gonna say you should know if your mature.")
    .addField("/shoot", "Head Shot's a mentioned user!!")
    .addField("/drag", "Drags mentioned user across the floor!!")
    .addField("/stab", "Stabs mentioned user and you can add what they are stabbed with")
    .addField("/kill", "Kills mentioned user")
    .addField("Recently Added", `/rps - Rock Paper Scissors`)
    .setFooter("Please message Hellful#2680 if you have any other ideas!");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(funembed);
  }

    if (message.content.toUpperCase() === `${prefix}HELP`) {

    let hicon = client.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Commands~.")
    .setColor("#6e0303")
    .setThumbnail(hicon)
    .addField("/fun-help", "Shows fun commands")
    .addField("/mod-help", "Show's the moderation commands.")
    .addField("/helpful-help", "Shows the helpful commands")
    .addField("/shop-help", "Shows the shop help");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(helpembed);
  }


    if (message.content.toUpperCase() === `${prefix}HELPFUL-HELP`) {

      let helpfulEmbed = new Discord.RichEmbed()
      .setTitle("~Helpful Commands~")
      .setColor("#6e0303")
      .addField("/botinfo", "Tells you a little info about the bot.")
      .addField("/botping", "Tells you the bots ping and API letency.(Not prefectly acurate)")
      .addField("/stats", "Says the bot's stats and a little more info(Mainly for bot owner and developer)")
      .addField("/sinfo", "Tells you info about the server.")
      .addField("/uinfo", "Tells you your user info")
      .setFooter("Thats all of the commands that are pretty useful.")

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(helpfulEmbed)
    }

    if(command === "oldwarn") {

    let reason = args.slice(1).join(' ');
    let wUser = message.mentions.users.first();

        let wEmbed = new Discord.RichEmbed()
        .setDescription("~Warn~")
        .setColor("#6e0303")
        .addField("Warned By", `${message.author}`)
        .addField("Warned User", `${wUser}`)
        .addField("Warned User ID", `${wUser.id}`)
        .setTimestamp()
        .addField("Reason", `${reason}`);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(wEmbed);


  }

const moment = require("moment");

if (message.content.toUpperCase() === `${prefix}UINFO`) {

  let user;

  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
      user = message.author;
  }
// Define the member of a guild.
  const member = message.guild.member(user);

//Discord rich embed
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(user.avatarURL)
  .setTitle(`${user.username}#${user.discriminator}`)
  .addField("ID:", `${user.id}`, true)
  .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
  .addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField("Bot:", `${user.bot}`, true)
  .addField("Status:", `${user.presence.status}`, true)
  .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
  .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
   message.channel.send(embed);
  }

                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful",
                "Fucked Up.",
                "Oh hell no!",
                "Why are you even asking me i aint yo personal doll to ask questions to.",
                "When i say hell you say no. Me: Hell Y'all: no",
                "Why ask such an obvious question?"

];
var balls = ball[Math.floor(Math.random() * ball.length)];
    message.channel.send("Question: " + question + " Answer: " + balls);
  } else

    if (command === "addrole") {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permissions.")
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Please provide a user name")
  let role = args.join(" ").slice(22);

  if (!role) return message.reply("Please provide a role name.");

  await (rMember.addRole(aRole.id))

}

 if (message.content.toUpperCase() === `${prefix}PIZZA`) {

const ahkEmbed = new Discord.RichEmbed()
    .setTitle(`Please choose a type of pizza.`)
    .setColor(`RANDOM`)
    .setDescription('We have: `pepperoni`, `cheese`, and `pineapple`');
message.channel.send({
    embed: ahkEmbed
})



const msgs = await message.channel.awaitMessages(msg => {
    if (msg.content.startsWith("pepperoni")) {
        const ahkkEmbed = new Discord.RichEmbed()
            .setTitle(`Here is your pepperoni pizza! Enjoy :D`)
            .setColor(`RANDOM`)
            .setFooter(`Pizza command by Hellful`)
            .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
        message.channel.send({
            embed: ahkkEmbed
        })
        return;
    } else if (msg.content.startsWith("cheese")) {
        const ahkkkEmbed = new Discord.RichEmbed()
            .setTitle(`Here is your cheese pizza! Enjoy :D`)
            .setColor(`RANDOM`)
            .setFooter(`Pizza command by Hellful`)
            .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
        message.channel.send({
            embed: ahkkkEmbed
        })

    } else if (msg.content.startsWith("pineapple")) {
        async function pineapple() {
            message.channel.send('really?')
            const mesgs = await msg.channel.awaitMessages(messg => {
                if (messg.content.startsWith("yes")) {
                    const ahkkkkEmbed = new Discord.RichEmbed()
                        .setTitle(`Here is your pineapple pizza! Enjoy :D`)
                        .setColor(`RANDOM`)
                        .setFooter(`Pizza command by Hellful`)
                        .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
                    message.channel.send({
                        embed: ahkkkkEmbed
                    })
                    return;
                } else {
                    if (messg.content.startsWith("no")) {
                        message.channel.send('Thanks!')
                        return;
                    }
                }

            }, {
                time: 50000
            })
        }
        pineapple()
    }
}, {
    time: 500000
})
}


  if (message.content.toUpperCase() === `${prefix}BOTINFO`) {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor(`RANDOM`)
    .setThumbnail(bicon)
    .addBlankField()
    .addField("Created For", "Lord Modding & Gaming")
    .addField("Info About the Bot", "Has music, Moderation Commands, Fun commands & More")
    .addBlankField()
    .addField("Bot Name", client.user.username)
    .addField("Bot ID", client.user.id)
    .addField("Created On", client.user.createdAt)
    .addField("Developer", "Hellful#2680")
    .addField("Bot Owner", "L|MT√1000 Magic#5563")
    .setFooter("Please note this a private bot made for *L|MT Lord Modding & Gaming* so please don't ask for the bot's invite.");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(botembed);

}


if(command === "update"){

  message.channel.send("Pushing Updates... Bot Restarting! ")
  await
  message.channel.send("Updated! :thumbsup: and bot Restarted.")

  const sayMessage = args.join(" ");
  // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
  message.delete().catch(O_o=>{});
  // And we get the bot to say the thing:
}

if (message.content.toUpperCase() === `${prefix}KICK`) {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kUser) return errors.cantfindUser(message.channel);

    let kReason = args.join(" ").slice(22);

    if(kUser.hasPermission("KICK_MEMBERS")) return errors.equalPerms(message, kUser, "KICK_MEMBERS");



    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);



    let kickChannel = message.guild.channels.find(`name`, "egclogs");

    if(!kickChannel) return message.channel.send("Can't find egclogs channel.");

    message.guild.member(kUser).kick(kReason);

    kickChannel.send(kickEmbed);

}
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    if (message.content.toUpperCase() === `${prefix}STATS`) {

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

}



    if (message.content.toUpperCase() === `${prefix}MEMBERCOUNT`) {

        let embed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.addField('Members', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.setFooter(`Owner: ${message.guild.owner.user.tag}`)
	   message.channel.send(embed);
    }

  if (message.content.toUpperCase() === `${prefix}OLDBAN`) {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Owner", "Admin", "Moderator", "CoLeader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server. Example: /ban @Loser Asking For it");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions? Invalid usage? Example: /ban @Loser Asking For it");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
  }

  if (message.content.toUpperCase() === `${prefix}CREATORS`) {

    let ownerEmbed = new Discord.RichEmbed()
    .setDescription("The Owner and Developers")
    .setColor("#00ff08")
    .addField("Bot Owner", "x1Rpg God1x#7449 ")
    .addField("Bot Developer / Co Bot Owner", "Hellful#2680")
    .addField("Co Developer", "Unmentionable Spirit#1974");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(ownerEmbed);
  }


   if (message.content.toUpperCase() === `${prefix}INFO`) {

    let userEmbed = new Discord.RichEmbed()
    .setDescription("Your info")
    .setColor("#6e0303")
    .addField("User Name", message.author)
    .addField("User ID", message.author.id)
    .addField("You Joined", message.member.joinedAt);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(userEmbed)
  }

   if (message.content.toUpperCase() === `${prefix}BAN`) {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Can't find user!");

    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");

    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#0033ff")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);



    let modlogchannel = message.guild.channels.find(`name`, "egclogs");

    if(!modlogchannel) return message.channel.send("Can't find egclogs channel.");

    message.guild.member(bUser).ban(bReason);

    modlogchannel.send(banEmbed);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

}


  if (message.content.toUpperCase() === `${prefix}SITE`) {

    let siteThumb = message.guild.iconURL;
    let siteEmbed = new Discord.RichEmbed()
    .setDescription("**~Website~**")
    .setColor("#6e0303")
    .setThumbnail(siteThumb)
    .addField("Our site's are listed below", ":fire:**These Are Our Team Sites.**:fire:")
    .addField("Website 1", "https://lordmoddingandgamingteam.jimdofree.com/")
    .addField("Website 2", "https://lordmoddingteam.weebly.com/")
    .addField("Website 3", "http://lmt.social4.us")
    .setFooter("Go Visit them!");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(siteEmbed)
  }

  if(command === "say") {

    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if(!message.member.roles.some(r=>["Owner", "Admin", "Moderator", "CoLeader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:
      message.channel.send(sayMessage);
  }

  if(command === "esay") {

    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if(!message.member.roles.some(r=>["Owner", "Admin", "Moderator", "CoLeader", "Mod"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

      const sayMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let esayEmbed = new Discord.RichEmbed()
      .setTitle("Say")
      .setColor("#0537ff")
      .setThumbnail(servIcon)
      .setDescription(`Said by ${message.author}`)
      .addField("Message", `${sayMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(esayEmbed);
  }

  if (message.content.toUpperCase() === `${prefix}ANNOUNCE`) {

    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    if(!message.member.roles.some(r=>["Owner", "Admin", "Moderator", "CoLeader", "Mod"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

      const aMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let aEmbed = new Discord.RichEmbed()
      .setTitle("Announcement!")
      .setColor("#0537ff")
      .setThumbnail(servIcon)
      .setDescription(`Announced by ${message.author}`)
      .addField("Message", `${aMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(aEmbed);
  }

      if (message.content.toUpperCase() === `${prefix}GTA`) {

    let serverIcon = message.guild.iconURL;
    let gtaEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**~Grand Theft Auto 5 Modded Account~**:fire:")
    .setColor("#0537ff")
    .setThumbnail(serverIcon)
    .addField("Come's with", "Money Level Unlocks and Lots More")
    .setFooter("Price: 25$ | All Platforms")

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(gtaEmbed)

  }


  if (message.content.toUpperCase() === `${prefix}PREFIX`) {
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

}


      if (message.content.toUpperCase() === `${prefix}BOT`) {

    let serverIcon = message.guild.iconURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**~Selling Custom Bots~**:fire:")
    .setColor("#0537ff")
    .setThumbnail(serverIcon)
    .addField("Come's with", "Custom Commands | Pre-Set permissions | All Commands Needed ")
    .setFooter("Price: Premium is 10$ USD Basic is 5$ | Coming Soon.")

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(botEmbed)

  }

          if (message.content.toUpperCase() === `${prefix}FORTNITE`) {

    let sIcon = message.guild.iconURL;
    let fortniteEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**Fortnite Modded Account**:fire:")
    .setColor("#0537ff")
    .setThumbnail(sIcon)
    .addField("Comes With", "V-Bucks | Max Level | Max Tier | And More!")
    .setFooter("Price: 25$ | All Platforms")

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(fortniteEmbed)

  }


 if (message.content.toUpperCase() === `${prefix}MUTE`) {
 let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply('I cannot find a muted role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor("#6e0303")
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('I do not have the correct permissions.').catch(console.error);

     message.channel.send(embed)

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() =>  {
    });
  }
};



if (message.content.toUpperCase() === `${prefix}SLAP`) {

    let SlapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const sEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, bitch slapped ${SlapUser}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(sEmbed)
}

if (message.content.toUpperCase() === `${prefix}STAB`) {

    let StabUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let sReason = args.join(" ").slice(22);


    const StabEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, stabbed the fuck out of ${StabUser} with a ${sReason}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(StabEmbed)
}

if (message.content.toUpperCase() === `${prefix}MARRY`) {

    let marryUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    const marryEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("Congrats!", `${message.author}, wants to marry ${marryUser}. ${marryUser}, needs to do /accept ${message.author.name} to accept marriage`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(marryEmbed)
}

if (message.content.toUpperCase() === `${prefix}DIVORCE`) {

    let divoreUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    const divorceEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("So So Sad", `${message.author}, divorced ${marryUser}.`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(divorceEmbed)
}

if (message.content.toUpperCase() === `${prefix}ACCEPT`) {

    let amarryUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    const amarryEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("Congrats!", `${message.author}, officially married ${amarryUser}.`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(amarryEmbed)
}

if (message.content.toUpperCase() === `${prefix}DENY`) {

    let dmarryUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    const dmarryEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("Congrats!", `${message.author}, officially married ${dmarryUser}.`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(dmarryEmbed)
}





    if (message.content.toUpperCase() === `${prefix}KILL`) {

    let KillUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const KillEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, killed ${KillUser}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(KillEmbed)
}

        if (message.content.toUpperCase() === `${prefix}PUNCH`) {
    let PunchUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const PunchEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, punched ${PunchUser} in the FACE!`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(PunchEmbed)
}


const ms = require("ms");

if (message.content.toUpperCase() === `${prefix}TEMPMUTE`) {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
  if(args[0] == "help"){
    message.reply("Usage: !tempmute <user> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Please supply a reason.");

  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executed by ${message.author}`)
  .setColor("#ff6e00")
  .addField("Muted User", tomute)
  .addField("Muted in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Length", mutetime)
  .addField("Reason", reason)
  .setTimestamp();

  let incidentschannel = message.guild.channels.find(`name`, "egclogs");
  if(!incidentschannel) return message.reply("Please create a egclogs channel first!");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}


    if (message.content.toUpperCase() === `${prefix}SHOOT`) {
    let ShotUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const shootEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, head-shot ${ShotUser} :gun:`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(shootEmbed)
}

        if (message.content.toUpperCase() === `${prefix}KISS`) {
    let KissedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const KissEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, kissed :kissing: ${KissedUser}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(KissEmbed)
}

            if (message.content.toUpperCase() === `${prefix}HUG`) {
    let HuggedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const HugEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, hugged :hugging: ${HuggedUser}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(KissEmbed)
}

            if (message.content.toUpperCase() === `${prefix}SEX`) {
    let FuckedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const SexEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Breaking News")
    .addField("They got down n' dirty!", `${message.author}, had sex with ${FuckedUser}`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(SexEmbed)
}

            if (message.content.toUpperCase() === `${prefix}DRAG`) {
    let DraggedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const DragEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, dragged ${DraggedUser} across the floor`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(DragEmbed)
}

            if (message.content.toUpperCase() === `${prefix}SLAM`) {
    let SlammedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const SlamEmbed = new Discord.RichEmbed()
    .setColor("#1aff00")
    .setDescription("Daily News")
    .addField("They got REKT!", `${message.author}, slammed ${SlammedUser} on the floor!`);

      const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

    message.channel.send(SlamEmbed)
}

  if (message.content.toUpperCase() === `${prefix}ROLES`) {

    let rEmbed = new Discord.RichEmbed()
    .setTitle("~List of Roles~")
    .setColor("#ff6200")
    .addBlankField()
    .addField("Staff Roles", "| Owner | CoLeader | Admin | Pre-Admin | Mod | Pre-Mod |")
    .addBlankField()
    .addField("Non-Staff Roles", "| Sponser | Developer | Coder-Team | Hacker-Team | Modder-Team | YouTuber | Partner | Fortnite Trusted Traders | Kind & Queen | Male & Female |")
    .addBlankField()
    .addField("Game & Game Console Roles", "| Roblox | Minecraft | Xbox | Playstation | Steam |")
    .addBlankField()
    .addField("Self Roles", "| ARK Gamers | Fortnite Gamers | GTA5 Gamers | CSGO Gamers | Minecraft Gamers | Roblox Gamers |")
    .addBlankField()
    .addField("Paid Roles", "| Im a Pro | Baller | VIP |")
    .setFooter("To get Self Roles go to #self-roles channel.");

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(rEmbed)
  }

    if (message.content.toUpperCase() === `${prefix}UNBAN`) {
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    let user = args[0];
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);
};

if (message.content.toUpperCase() === `${prefix}BALANCE`) {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);
}

  if(command === "announcwwwwdwwwdwwe") {

    let announcement = args.join(" ").slice(22);

    let aEmbed = new Discord.RichEmbed()
    .setTitle("Announcemnt!")
    .addBlankField()
    .addField("Message Annouced", `${announcement}`)
    .addBlankField()
    .setTimestamp();

    message.channel.send(aEmbed)

}


if (message.content.toUpperCase() === `${prefix}WARN`) {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!rUser) return errors.cantfindUser(message.channel);

let rreason = args.join(" ").slice(22);

if(!rreason) return errors.noReason(message.channel);



let reportEmbed = new Discord.RichEmbed()

.setDescription("~Warning~")
.setColor("#ff6200")
.addField("Warned User", `${rUser} with ID: ${rUser.id}`)
.addField("Warned By", `${message.author} with ID: ${message.author.id}`)
.addField("Warned in Channel", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", rreason);

let reportschannel = message.guild.channels.find(`name`, "egclogs");

if(!reportschannel) return message.channel.send("Couldn't find egclogs channel.");

const sayMessage = args.join(" ");
// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
message.delete().catch(O_o=>{});
// And we get the bot to say the thing:

reportschannel.send(reportEmbed);

}

    if (message.content.toUpperCase() === `${prefix}VOTE`) {
    if (!args) return message.reply("You must have something to vote for!")
    const pollTopic = await message.channel.send(message.content.slice(2));
    await pollTopic.react(`✅`);
    await pollTopic.react(`⛔`);
    // Create a reaction collector
    const filter = (reaction) => reaction.emoji.name === '✅s';
    const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
    collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }

    if (message.content.toUpperCase() === `${prefix}POLL`) {

      if (!message.member.hasPermission('MANAGE_MESSAGES') && message.author.id !== '357555941215961099') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
      if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));

        let embed = new Discord.RichEmbed()
        .setTitle(args.join(' '))
        .setFooter('React to vote on Poll!')
        .setColor('#7289DA')
        const pollTitle = await message.channel.send({ embed });
          await pollTitle.react(`✅`);
          await pollTitle.react(`⛔`);

        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
          collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
          collector.on('end', collected => console.log(`Collected ${collected.size} items`));

        const filter1 = (reaction) => reaction.emoji.name === '⛔';
        const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
          collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
          collector1.on('end', collected => console.log(`Collected ${collected.size} items`));

          const sayMessage = args.join(" ");
          // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
          message.delete().catch(O_o=>{});
          // And we get the bot to say the thing:
    };

    const superagent = require('superagent');

    if (message.content.toUpperCase() === `${prefix}MEME`) {

        let{body} = await superagent
      .get(`https://api-to.get-a.life/meme`);

    let me = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle("lmao!")
    .setImage(body.url);

    message.channel.send(me);
  }

if(command === "rps") {

    var choice = args[0];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = "I'm choosing **Scissors**! :v: I win!"
    } else if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: It's a tie!"
    } else {
      var response = "I'm choosing **Rock**! :punch: You win!"
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: I win!"
    } else if (choice2 == "rock") {
      var response = "I'm choosing **Rock**! :punch: It's a tie!"
    } else {
      var response = "I'm choosing **Scissors**! :v: You win!"
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "I'm choosing **Paper**! :hand_splayed: You win!"
    } else if (choice2 == "scissors") {
      var response = "I'm choosing **Scissors**! :v: It's a tie!"
    } else {
      var response = "I'm choosing **Rock**! :punch: I win!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`You need to use /rps <rock|paper|scissors>`);
  }
}

if(command === "purwwwwwge") {
const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
// So we get our messages, and delete them. Simple enough, right?
const fetched = await message.channel.fetchMessages({count: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

  const sayMessage = args.join(" ");
  // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
  message.delete().catch(O_o=>{});
  // And we get the bot to say the thing:
}

if (message.content.toUpperCase() === `${prefix}SINFO`) {

let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
let day = message.guild.createdAt.getDate()
let month = 1 + message.guild.createdAt.getMonth()
let year = message.guild.createdAt.getFullYear()
 let sicon = message.guild.iconURL;
 let serverembed = new Discord.RichEmbed()
 .setAuthor(message.guild.name, sicon)
 .setFooter(`Server Created • ${day}.${month}.${year}`)
 .setColor("#7289DA")
 .setThumbnail(sicon)
 .addField("ID", message.guild.id, true)
 .addField("Name", message.guild.name, true)
 .addField("Owner", "magic 1000k#5563")
 .addField("Region", message.guild.region, true)
 .addField("Channels", message.guild.channels.size, true)
 .addField("Members", message.guild.memberCount, true)
 .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
 .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
 .addField("Online", online.size, true)
 .addField("Roles", message.guild.roles.size, true);
 message.channel.send(serverembed);

 const sayMessage = args.join(" ");
 // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
 message.delete().catch(O_o=>{});
 // And we get the bot to say the thing:
}


if (message.content.toUpperCase() === `${prefix}PURGE`) {
// This episode will cover purging messages from a channel.

// First, we need to fetch the amount of messages a user wants to purge, this will be stored in args[0].
  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
// This checks if args[0] is NOT a number, if not it runs the return statement which sends a message in chat.
// We also need to check if the number is LESS THAN 100, since 100 is the max you can delete at once.
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
// This checks if args[0] is MORE THAN 100, if it is, it returns and sends a message.

// Now, we can delete the messages
  message.channel.bulkDelete(args[0])
 // This sends how many messages they deleted to chat, we also want to delete this message. This deletes the message after 10000 milliseconds.

  }


//requireing discord-economy
const economy = require('discord-eco');
  // Prefix

          // There are multiple ways you can use discord-eco.

          // Example: Fetching Balance
          if (message.content.toUpperCase() === `${prefix}BALANCE`) {

              economy.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
                  message.channel.send(`**Balance:** ${i.money}`);
              })


          }

          // Example: Adding Money To A User
          if (message.content.toUpperCase() === `${prefix}PAYDAY`) {

              economy.updateBalance(message.author.id, 500).then((i) => { // economy.updateBalance grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                  message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
              })

          }

          // Example: Removing Money From A User
          if (message.content.toUpperCase() === `${prefix}PAYFINE`) {

              economy.updateBalance(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the balance $500 lower.
                  message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
              })

          }


      });

    client.on('message', message => {
        if (message.content.startsWith("hey")) {
        //do stuff here
        message.channel.send("What up!")
  }
});

    client.on('message', message => {
        if (message.content.startsWith("Hey")) {
        //do stuff here
        message.channel.send("What up!")
  }
});

    client.on('message', message => {
      if (message.content.startsWith("stfu")) {
      //do stuff here
      message.channel.send("Shut The Fuck Up is right!")
}
});
    client.on('message', message => {
     if (message.content.startsWith("Stfu")) {

     message.channel.send("Shut The Fuck Up is right!")
}
});

    client.on('message', message => {
     if (message.content.startsWith("kys")) {
      //do shit here
     message.channel.send("Y'all need to shut the fuck up and kys")
}
});

client.on('message', message => {
 if (message.content.startsWith("testing")) {
  //do shit here
 message.channel.send("@Hellful#2680")
}
});

client.on('message', message => {
 if (message.content.startsWith("prefix")) {
  //do shit here
 message.channel.send("My Prefix is `/` do /help to find all my commands!")
}
});

    client.on('guildMemberAdd', member => {
    member.guild.channels.get('441077938608144384').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('441077991058178049').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('441078969115213824').setName(`Bot Count: ${bots}`)
});

   client.on('guildMemberRemove', member => {
   member.guild.channels.get('441077938608144384').setName(`Total Users: ${member.guild.memberCount}`)
   let humans = member.guild.members.filter(m => !m.user.bot).size;
   member.guild.channels.get('441077991058178049').setName(`Member Count: ${humans}`)
   let bots = member.guild.members.filter(m => m.user.bot).size;
   member.guild.channels.get('441078969115213824').setName(`Bot Count: ${bots}`)
});

    client.on("guildMemberAdd", function(member) {
      member.addRole(member.guild.roles.find("name", "EGC-_-Gamers"))
});

    client.on('guildMemberAdd', member => {
      member.guild.channels.get(`447799925783396383`).send(`<@${member.id}>, Welcome to **Chill Zone**, Wanna apply for staff? say apply for staff`);
});


client.login(config.token);
