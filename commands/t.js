const { youtubeDl2 } = require('@bochilteam/scraper');

cmd({
  pattern: "test1",
  alias: ["t1"],
  desc: "YT video Downloader using youtube link",
  react: "🎥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const data = await youtubeDl2(text);
    console.log(data);
    citel.reply(JSON.stringify(data)); // JSON
    
    console.log(Object.keys(data.video));
    citel.reply(Object.keys(data.video));
    
    console.log(Object.keys(data.audio));
    citel.reply(Object.keys(data.audio)); // List of resolution/quality
    
    const url = await data.video['720p'].download(); // Download '720p' video
    console.log(url);
    citel.reply(url); // string
  } catch (err) {
    console.log(err);
    citel.reply(`❌ Got an error: ${err}`);
  }
});
