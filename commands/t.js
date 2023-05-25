const { youtubedl } = require('@bochilteam/scraper-sosmed');
const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib');

cmd({
  pattern: "test1",
  alias: ["t1"],
  desc: "YT video Downloader using youtube link",
  react: "🎥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const data = await youtubedl(text);
    console.log(data);
    citel.reply(JSON.stringify(data)); // JSON
    
    console.log(Object.keys(data.video));
    citel.reply(Object.keys(data.video));
    
    console.log(Object.keys(data.audio));
    citel.reply(Object.keys(data.audio)); // List of resolution/quality
    

  } catch (err) {
    console.log(err);
    citel.reply(`❌ Got an error: ${err}`);
  }
});
