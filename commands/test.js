
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
  } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\n*ERROR* :- ${err}`);
  }
});

cmd({
  pattern: "ta2",
  desc: "Test audio 2: YouTube",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
const config = {
    type: 'audio', // audio or video
    quality: 480, // Quality of the video or audio (kbps or p)
    server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
}

const result = await svdl.download(text, config)
citel.reply(result);
 } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\n*ERROR* :- ${err}`);
  }
});
cmd({
  pattern: "tv2",
  desc: "Test video 2: YouTube",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const svdl = require("@blackamda/song_video_dl");
const config = {
    type: 'video', // audio or video
    quality: 480, // Quality of the video or audio (kbps or p)
    server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
}

const result = await svdl.download(text, config)
citel.reply(result);
 } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\n*ERROR* :- ${err}`);
  }
});

cmd({
  pattern: "ta3",
  desc: "Test video 2: YouTube",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    const { yta, ytv } = require('y2mate-js');
let youtubeaudio = await ytv('https://youtu.be/Ot7SeZvfBA0','720','id11');
    citel.reply( youtubeaudio)
    let youtubevideo = await yta('https://youtu.be/Ot7SeZvfBA0','id11')
citel.reply(youtubevideo)
    } catch (err) {
    console.error(err);
    citel.reply(`An error occurred while fetching the video.\n*ERROR* :- ${err}`);
  }
});
