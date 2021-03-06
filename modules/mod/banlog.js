module.exports.config = {
  name: 'banlog',
  invokers: ['banlog', 'kicklog', 'unbanlog'],
  help: 'Creates a banlog thing',
  expandedHelp: 'Creates a ban/kick/unbanlog with user, type, reason, and responsible mod',
  usage: ['Id', 'banlog 123456789 reason here', 'mention', 'kicklog @user gya', 'tag', 'unbanlog username#discrim']
}

const Discord = require('discord.js')

module.exports.events = {}
module.exports.events.message = async (bot, message) => {
  if (!message.guild) return

  let [cmd, user, ...reason] = bot.sleet.shlex(message)

  let victim
  reason = reason.join(' ')

  if (message.mentions.users.first()) {
    victim = message.mentions.users.first()
  } else if (!isNaN(parseInt(user))) {
    try {
      victim = await bot.fetchUser(user)
    } catch (e) {}
  } else if (!(user instanceof Discord.User)) {
    victim = message.guild.members.find(m => m.user.tag === user || m.user.username === user)
    if (victim !== undefined) victim = victim.user //nice
  }

  if (victim === undefined || victim === null)
    victim = {tag: user, id: '???'}

  message.channel.send(
`**${capitalize(cmd.toLowerCase().replace(/log$/, ''))}**
**User**: ${victim.tag} (${victim.id})
**Reason**: ${reason || 'None provided.'}
**Responsible moderator**: ${message.author.tag}`, {code: ''})
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}
