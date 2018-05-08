// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Made By L|MT`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Made By L|MT`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Made By L|MT`);
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

  // Let's go with a few common example commands! Feel free to delete or change those.

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms` );

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
  }
    
     if(command === "shop-help") {
     let sicon = client.user.displayAvatarURL;
     let Sembed = new Discord.RichEmbed()
    .setDescription("~Shop Commands~")
    .setColor("#6e0303")
    .setThumbnail(sicon)   
    .addField("/gta", "Shows the GTA modded account info")
    .addField("/fortnite", "Shows the Fortnite modded account info")
    .addField("/bot", "Shows custom bot info")
    .setFooter("More Possibly Coming Soon");
    
      message.channel.send(Sembed)
    }
    
    if(command === "fun-help") { 
      
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
    .addField("Recently Added", `/stab | /kill`)
    .setFooter("More Coming Soon");
        
    message.channel.send(funembed);
  }
    
    if(command === "help") { 
      
    let hicon = client.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Commands~.")
    .setColor("#6e0303")
    .setThumbnail(hicon)
    .addField("/fun-help", "Shows fun commands")
    .addField("/mod-help", "Show's the moderation commands.")
    .addField("/shop-help", "Shows the shop help");
    message.channel.send(helpembed);
  }
    
    if(command === "warn") { 
        
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
        
        
    
        if(command === "mod-help") { 
      
    let micon = client.user.displayAvatarURL;
    let modembed = new Discord.RichEmbed()
    .setDescription("~Mod Commands~.")
    .setColor("#6e0303")
    .setThumbnail(micon)
    .addField("ban", "Bans a member")
    .addField("kick", "Kicks a member")
    .addField("mute", "Mute's a member")
    .addField("unban", "Removes banned member from ban-list")
    .addField("warn", "Warns a member.")
    .addBlankField()
    .addField("Member Command", "report");
    message.channel.send(modembed);
  }

  if(command === "Oldhelp") { 
      
    let hicon = client.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Commands~.")
    .setColor("#6e0303")
    .setThumbnail(hicon)
    .addField("say", "Says what you put after ;;say")
    .addField("kick", "Kicks a members from the server if you have valid permissions.")
    .addField("ban", "Bans a member from the server if you have valid permissions.")
    .addField("botinfo", "Tells you info about the bot.")
    .addField("serverinfo", "Tells info about the server")
    .addField("purge", "Clears X amout of messages.")
    .addField("site", "Tells you our site!")
    .addField("New Stuff", "/gta | /fortnite | /bot")
    .setFooter("Thats All Of My Commands.");

    message.channel.send(helpembed);
  }
    
          if (command === "coinflip") {
      var coinflip = [
                "Heads",
                "Tails"
];
var coinflips = coinflip[Math.floor(Math.random() *coinflip.length)];
    message.channel.send(coinflips);
  } else
 
 if (command === "setusername") {
      let username = args.join(' ');
      if (username.length < 1) return message.reply('You must supply a name for the bot.').catch(console.error);
      if (!message.guild.member(client.user).hasPermission('CHANGE_NICKNAME')) return message.channel.sendMessage('you do not have the correct permissions.').catch(console.error);
      message.guild.members.get('315603409203888138').setNickname(username);
                message.reply('Username set!').catch(console.error);
    } else
 
      if (command === "compliment") {
     let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to compliment them.').catch(console.error);
      var compliment = [
                    "Are you from earth? No you cant be you look way too good",
                    "You're an awesome friend.",
                    "You're a gift to those around you.",
                    "You're a smart cookie.",
                    "You are awesome!",
                    "You have impeccable manners.",
                    "I like your style.",
                    "You have the best laugh.",
                    "I appreciate you.",
                    "You are the most perfect you there is.",
                    "You are enough.",
                    "You're strong.",
                    "Your perspective is refreshing.",
                    "I'm grateful to know you.",
                    "You light up the room.",
                    "You deserve a hug right now.",
                    "You should be proud of yourself.",
                    "You're more helpful than you realize.",
                    "You have a great sense of humor.",
                    "You've got an awesome sense of humor!",
                    "You are really courageous.",
                    "Your kindness is a balm to all who encounter it.",
                    "You're all that and a super-size bag of chips.",
                    "You are strong.",
                    "You're even more beautiful on the inside than you are on the outside.",
                    "You have the courage of your convictions.",
                    "You a hoe ass bitch",
                    "You're like a ray of sunshine on a really dreary day.",
                    "You are making a difference.",
                    "You bring out the best in other people."
 
];
var compliments = compliment[Math.floor(Math.random() * compliment.length)];
    message.channel.send(user.username + " " + compliments);
  } else        
      
   if (command === "roast") {
     let user = message.mentions.users.first();
      if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
      var roast = [
                "Were you born on the highway? That is where most accidents happen.",
                "I was going to give you a nasty look... but I see you already have one.",
                "Remember when I asked for your opinion? Me neither.",
                "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
                "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
                "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
                "Two wrongs don't make a right, take your parents as an example.",
                "Just looking at you, I now understand why some animals eat their young offspring.",
                "Does time actually fly when you're having sex, or was it just one minute after all?",
                "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
                "This is why you dont have nice things",
                "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
                "You're IQ's lower than your dick size.",
                "Are you always such an idiot, or do you just show off when I’m around?",
                "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
                "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
                "You’re about as useful as a screen door on a submarine.",
                "You always bring me so much joy—as soon as you leave the room.",
                "Stupidity’s not a crime, so feel free to go.",
                "If laughter is the best medicine, your face must be curing the world.",
                "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
                "It looks like your face caught fire and someone tried to put it out with a hammer.",
                "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
                "Why is it acceptable for you to be an idiot but not for me to point it out?",
                "You're so fat you could sell shade.",
                "Your family tree must be a cactus because everyone on it is a prick.",
                "You'll never be the man your mother is.",
                "Just because you have an ass doesn't mean you need to act like one.",
                "Which sexual position produces the ugliest children? Ask your mother she knows.",
                "If I had a face like yours I'd sue my parents.",
                "The zoo called. They're wondering how you got out of your cage?",
                "Hey, you have something on your chin... no, the 3rd one down.",
                "Aww, it's so cute when you try to talk about things you don't understand.",
                "You are proof that evolution can go in reverse.",
                "Brains aren't everything. In your case they're nothing.",
                "You're so ugly when you look in the mirror, your reflection looks away.",
                "I'm sorry I didn't get that - I don't speak idiot.",
                "It's better to let someone think you're stupid than open your mouth and prove it.",
                "Were you born this stupid or did you take lessons?",
                "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
                "Don't you get tired of putting make up on two faces every morning?",
                "Hey, I'm straighter than the pole your mom dances on.",
                "If ugliness were measured in bricks, you would be the Great Wall of China.",
                "I thought I said goodbye to you this morning when I flushed the toilet",
                "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
                "Zombies are looking for brains. Don't worry. You're safe.",
                "spreading rumors? At least you found a hobby spreading something other than your legs.",
                "i would tell you to eat trash but that’s cannibalism",
                "If you spoke your mind, you would be speechless",
                "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
                "FUCK YOUR STUPID ASS LOOKIN LIKE A FUCKIN GARAFFE LOOKIN ASS GO AWAY AND DIE IN A FUCKING HOLE NIGGA BITCH ASS HOE",
                "Acting like a dick won't make yours any bigger",
                "If I wanted to hear from an asshole, I would have farted",
                "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
                "You remind me of a penny, two faced, worthless, always on the ground and in everyones pants!",
                "I've met some pricks in my time but you my friend, are the fucking cactus",
                "I'd slap you, but that would be animal abuse",
                "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
                "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
                "You're so dumb, your brain cell died of loneliness",
                "You shouldn't let your mind wander..its way to small to be out on its own",
                "I don't know what makes you so dumb, but its working",
                "You should put the diaper on your mouth, that's where the craps comin' out.",
                "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
                "Could you go away please, I'm allergic to douchebags",
                "If you had any intelligence to question I would have questioned it already.",
                "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
                "I would answer you back but life is too short, just like your d*ck",
                "Mirrors don't lie. Lucky for you, they can't laugh either.",
                "I was right there are no humans in this channel",
                "You have a face not even a mother could love....",
                "Stop having sex and do something besides spread your legs as wide as the grand canyon",
                "You know what I would find if I looked up idiot in the dictionary a picture of you?",
                "You make the guys on Jackass look like Einstein.....",
                "I would slap you but I don't want to make your face look any better",
                "Sorry, I can't put small objects in my mouth or Ill choke",
                "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
                "Have you been shopping lately? They're selling lives at the mall, you should get one"
 
];
var roasts = roast[Math.floor(Math.random() * roast.length)];
    message.channel.send(user.username + " " + roasts);
  } else
    
        if (command === "8ball") {
    let question = args.join(' ');
    if (question.length < 1) return message.reply('You must supply a question for the 8ball.').catch(console.error);
      var ball = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
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
                "Fucked Up."

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
  let aRole = message.guild.roles.find(`name`, role);
  if (!aRole) return message.reply(`I can't find the role.`);

  if (rMember.roles.has(aRole.id)) return message.reply("The user already have this role!");
  await (rMember.addRole(aRole.id))

}


  if(command === "botinfo") {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#6e0303")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Bot ID", client.user.id)
    .addField("Created On", client.user.createdAt)
    .addField("Developer", "Hellful#2680");

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

if(command === "kick") {
    
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
    


    let kickChannel = message.guild.channels.find(`name`, "mod-logs");

    if(!kickChannel) return message.channel.send("Can't find mod-logs channel.");

    message.guild.member(kUser).kick(kReason);

    kickChannel.send(kickEmbed);

}
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    if(command === "stats") {
    
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
           

    
    if(command === "membercount") {
        
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

  if(command === "Oldban") {
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

  if(command === "creators") {

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


  if(command === "serverinfo"){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#6e0303")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:

    message.channel.send(serverembed);
  }

    
   if(command === "info"){

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
  
   if(command === "ban") { 
    
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



    let modlogchannel = message.guild.channels.find(`name`, "mod-logs");

    if(!modlogchannel) return message.channel.send("Can't find mod-logs channel.");

    message.guild.member(bUser).ban(bReason);

    modlogchannel.send(banEmbed);

}
    
  if(command === "site") {

    let siteThumb = message.guild.iconURL;
    let siteEmbed = new Discord.RichEmbed()
    .setDescription("**~Website~**")
    .setColor("#6e0303")
    .setThumbnail(siteThumb)
    .addField("Sites", ":fire:**These Are Our Team Sites.**:fire: https://lordmoddingandgamingteam.jimdofree.com/")
    .addField("Website 2", "https://lordmoddingteam.weebly.com/")
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
    
      if(command === "gta") {

    let serverIcon = message.guild.iconURL;
    let gtaEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**~Grand Theft Auto 5 Modded Account~**:fire:")
    .setColor("#0537ff")
    .setThumbnail(serverIcon)
    .addField("Come's with", "Money Level Unlocks and Lots More")
    .setFooter("Price: 25$ | All Platforms")
    
    message.channel.send(gtaEmbed)
          
  }
    
        
      if(command === "bot") {

    let serverIcon = message.guild.iconURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**~Selling Custom Bots~**:fire:")
    .setColor("#0537ff")
    .setThumbnail(serverIcon)
    .addField("Come's with", "Custom Commands | Pre-Set permissions | All Commands Needed ")
    .setFooter("Price: Premium is 10$ USD Basic is 5$ | Coming Soon.")
    
    message.channel.send(botEmbed)
          
  }
    
          if(command === "fortnite") {

    let sIcon = message.guild.iconURL;
    let fortniteEmbed = new Discord.RichEmbed()
    .setDescription(":fire:**Fortnite Modded Account**:fire:")
    .setColor("#0537ff")
    .setThumbnail(sIcon)
    .addField("Comes With", "V-Bucks | Max Level | Max Tier | And More!")
    .setFooter("Price: 25$ | All Platforms")
    
    message.channel.send(fortniteEmbed)
          
  }
    
    
 if (command === "mute") {
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
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
 
     message.channel.send(embed)
     
  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() =>  {
    });
  }
}; 
    

 
if(command === "slap") {
    
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
    
if(command === "stab") {
    
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
    
    if(command === "kill") {
    
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
    
        if(command === "punch") {
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
    
    if(command === "shoot") {
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

        if(command === "kiss") {
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

            if(command === "hug") {
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

            if(command === "sex") {
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

            if(command === "drag") {
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
    
            if(command === "slam") {
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
    
    if (command === "unban") {
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    let user = args[0];
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);
};

    const superagent = require('superagent');
    if (command === "superagent") {
    let color = ''
    const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setImage(`${body.image}`)
    message.channel.send(`The magic API says: **${body.answer}**`, {embed});
}
  
if(command === "report") {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!rUser) return errors.cantfindUser(message.channel);

let rreason = args.join(" ").slice(22);

if(!rreason) return errors.noReason(message.channel);



let reportEmbed = new Discord.RichEmbed()

.setDescription("~Report~")
.setColor("#ff6200")
.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
.addField("Channel", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", rreason);

let reportschannel = message.guild.channels.find(`name`, "reports");

if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

reportschannel.send(reportEmbed);

}

    if (command === "v") {
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

    if (command === "poll") {

      if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
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
    };

    if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 9000)
      return message.reply("Please provide a number between 2 and 9000 for the number of messages to delete");
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
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
      member.addRole(member.guild.roles.find("name", "L|MT-_-Gamers"))
});
    
    client.on('guildMemberAdd', member => {
      member.guild.channels.get('443215916835274772').send(`<@${member.id}>, Welcome to **L|MT**, Wanna apply for staff go to staff-applications channel.`);
});

client.login(config.token);
