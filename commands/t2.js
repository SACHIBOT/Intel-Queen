
const { tlang, botpic, cmd, prefix, runtime, Config, formatp } = require('../lib');

cmd({
  pattern: "test2",
  alias: ["t2"],
  desc: "YT video Downloader using youtube link",
  react: "🎥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const { youtubeDL2 } = require('@bochilteam/scraper');
    const data = await youtubeDL2(text);
    console.log(data);
    citel.reply(data); // JSON
  } catch (err) {
    console.log(err);
    citel.reply(`❌ Got an error: ${err}`);
  }
});
