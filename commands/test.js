
const { tlang, cmd, fetchJson, prefix, Config } = require('../lib');



cmd({
  pattern: "t1",
  desc: "Test 1: YouTube",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const { download, search, getVideoInfo } = require("youtube-s-dl");
    let t1result = await search(text);
    let info1 = await getVideoInfo(t1result[0].videoId);
    citel.reply(info1);
    citel.reply(`from - https://www.npmjs.com/package/youtube-s-dl`);
  } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\nfrom - https://www.npmjs.com/package/youtube-s-dl\n*ERROR* :- ${err}`);
  }
});

cmd({
  pattern: "t2",
  desc: "Test 2: YouTube",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const svdl = require("@blackamda/song_video_dl");
const config1 = {
    type: 'audio', // audio or video
    quality: 480, // Quality of the video or audio (kbps or p)
    server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
}
const config2 = {
    type: 'video', // audio or video
    quality: 480, // Quality of the video or audio (kbps or p)
    server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
}

const result1 = await svdl.download(text, config1);
citel.reply(result1);
    const result2 = await svdl.download(text, config2);
citel.reply(result2);
    citel.reply(`from - https://www.npmjs.com/package/@blackamda/song_video_dl`);
 } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\nfrom - https://www.npmjs.com/package/@blackamda/song_video_dl\n*ERROR* :- ${err}`);
  }
});
