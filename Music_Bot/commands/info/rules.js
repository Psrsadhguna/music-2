const config = require('../../botconfig/config.json');
const {
  Discord, MessageActionRow, MessageSelectMenu, MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'rules',
  category: "ðŸ” Secret",
  aliases: ["set-rules"],
  usage: '',
  description: '',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args, ee, prefix) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Click me to view Rule-Category-Page(s)")
      .addOptions([
        {
          label: "General Rules",
          description: "Rules that are Generaly Used on Servers",
          value: "general",
          emoji: "937371542298447872"
        },
        {
          label: "Chat Rules",
          description: "Rules that apply for all Chat Channels",
          value: "chat",
          emoji: "937371590142881843"
        },
        {
          label: "Voice Rules",
          description: "Rules that apply for all Voice Channels",
          value: "voice",
          emoji: "937371645696409610"
        },
        {
          label: "Youtube Rules",
          description: "Rules For Our Youtube You Must Read",
          value: "Youtube",
          emoji: "918177178196246528"
        }
      ])
    )

    let embed = new MessageEmbed()
    .setTitle(`**Welcome to __${message.guild.name}__! Here are all of our RULES!**`)
    .setDescription(`
    > Make sure to carefully read and mind the Server-Rules.

    > If you ever **break any of those Rules**, the¨ Staff Team is allowed to **warn you**.
    > If you get \`5 Warns\`, you'll get **kicked**! If you get \`10 Warns\`, you'll get **banned**!
    > To get unbanned, you may request it with a **CLEAN UNBAN REQUEST** in:
    > https://discord.gg/bR3gkCTjVb

    > **Please advertise this Server and Invite your Friends with:**
  
    > Attention! If you want to get your \`invites\` **Count** then create your **OWN PERMANENT INVITE LINK**
    `)
    .setColor("BLUE")
    .setFooter("Made By WHITE DEVIL")

    let sendmsg = await message.channel.send({ ephemeral: true, embeds : [embed], components:[row]})


    
let embed1 = new MessageEmbed()
    .setTitle("General Rules")
    .setDescription(`
**Rule #001**
> __Be Respectful!__
> *You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.*

**Rule #002**
> __No pornographic/adult/other NSFW material!__
> *This is a community server and not meant to share this kind of material.*

**Rule #003**
> __Use Bots in the dedicated Channel!__
> *If you want to use a Bot, then use the Bot-Commands Channel*

**Rule #004**
> __No Harassment of Any Kind!__
> *Harassment, abuse, hate speech or any kind of discriminatory speech will not be tolerated.*

**Rule #005**
> __No Voice Trolling and Channel Hopping!__
> *You may not randomly scream or play audios in Audio Channels because that's not allowed.*
> *Also jumping in a Voice Channel and leaving or trolling with BOT-MUSIC-COMMANDS is not allowed.*

**Rule #006**
> __Always read the pinned Messages first, before Asking Something!__
> *Most of the Times, very important / helpful stuff is in the PINS of a Channel, check them out, before re-asking something!*

**Rule #007**
> __No Pining Staff!__
> *Tagging a member/staff member without reason will result in a warning.*

**Rule #008**
> __No Being Racist *(racisom)*__
> *Racial or offensive slurs will not be tolerated.*
    `)
    .setColor(ee.color)

    let embed2 = new MessageEmbed()
    .setTitle("Chat Rules")
    .setDescription(`
**Rule #009**
> __No Spamming!__
> *Dont Spam (Emoji , same msg again & again or Dont spam for Level Increase.*
    
**Rule #010**
> __Listen the First Time!__
> *If any of staff member is asking to Change the Topic of conversation then it needs to be changed, if it gets too offensive to other members. If not followed, there are kick/ban.*

**Rule #011**
> __Make New Members comfortable!__  
> *We highly request to our old members to welcome new members & try including them in your conversation. Donâ€™t act creepy or rude towards the new members because they do not know how to behave in server.*
    
**Rule #012**
> __Respect Staff Members!__
> *Respect all staff and follow their instruction , Do not Use Abusive/odd Names/ Profile Pictures. If Any mod Found You Guilty they Can Change Your Name Any time.*

**Rule #013**
> __No Exposing Members!__
> *Dont expose anyone. Do not send any private information of anyone without permission. That includes pictures.*

**Rule #014**
> __Dont Cause Any Scenes!__
> *As much as we love drama, If you are annoyed by someone block that person and just move on.*

**Rule #015**
> __Have Some Common Sense!__
> *Have common sense to understand puns/sarcasm.*

**Rule #016**
> __Act Like Normal!__
> *Do not misbehave with girls and respect each and everyone member in the server.*
    `)
    .setColor(ee.color)


    let embed3 = new MessageEmbed()
    .setTitle("Voice Rules")
    .setDescription(`
**Rule #017**
> __Dont Post Bad Stuff!__ 
> *Posting any content related to pivacy, cheats, cracks, exploits or any kind of copyright breaching materials is forbidden.*

**Rule #018**
> __No Malicious Behavior!__ 
> *Any malicious activity toward the server or any member is forbidden.*

**Rule #019**
> __Follow the Discord TOS!__ 
> *This server follows all the Discord Guidelines and TermsOfServices. Please do read and follow all them listed.*

**Rule #020**
> __No Threats!__
> *Threats such as DDoS, DoX, or generalized threats are strictly prohibited and will result in an immediate removal/ban from the community.*

**Rule #021**
> __Dont Be Lewd!__
> *Any attempts to other fellow community members is strictly prohibited and will result in an immediate removal/ban from the server.*

**Rule #022**
> __No Arguing with Staff!__
> *Do not Argue With Any Mod/Staff. Their Decision will be last Decision*

**Rule #023**
> __No Voice Changers!__
> Do not use voice changer in vc, this will lead to permanent ban from the server.

**Rule #024**
> __No Need for ASMR!__
> Do not blow air in the mic or else you will be banned from vc.
    `)
    .setColor(ee.color)
    let embed4 = new MessageEmbed()
    .setTitle("Youtube Rules")
    .setDescription("                                             **Rule #025**                                                 > _No Need To Ping Mods Or Admins_                             > Pinging Mods Or Admins Will get you a Instant Ban                                                                          **Rule #026**                                                  > _Dont Unsubscribe After Acsess_                              > Unsubing After Acsess Will Get You A Ban                                                                                    **Rule #027**                                                  > _Stealing Proff_                                             > Stealing Proff Will Lead You A Instant Ban                                                                                  **Rule #028**                                                 > _Leaving After Taking Codes_                                > Leaving After Taking Codes Will Too Lead You A Instant Ban")   




const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === "general") {
  collected.reply({embeds:[embed1], ephemeral:true})
}

if(value === "chat") {
  collected.reply({embeds:[embed2], ephemeral:true})
}

if(value === "voice") {
  collected.reply({embeds:[embed3], ephemeral:true})
}

if(value === "Youtube") {
  collected.reply({embeds:[embed4], ephemeral:true})
}


})

  }
}