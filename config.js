const fs = require('fs')
 
const { existsSync } = require('fs')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sachi26:sachithafdo@sachi26.axifs3y.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sachibot26@gmail.com'
global.github = 'https://github.com/SACHIBOT/Secktor-Md'
global.location = 'Colombo,SriLanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94725881990'
global.website = 'https://github.com/SACHIBOT/Intel-Queen' //wa.me/+9400000000
module.exports = {
  botname: process.env.BOT_NAME || '𝙄𝙉𝙏𝙀𝙇-𝙌𝙐𝙀𝙀𝙉',
  ownername:process.env.OWNER_NAME || 'SACHIBOT',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0], 
  packname: process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  prefix: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "mongodb+srv://sachi26:sachithafdo@sachi26.axifs3y.mongodb.net/?retryWrites=true&w=majority",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'kick',
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'intelqueen' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
 LANG: process.env.THEME|| 'INTEL-QUEEN',
 WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
