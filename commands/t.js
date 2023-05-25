const { tlang, ringtone, cmd, fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib');
const ytdl = require('ytdl-secktor');
const fs = require('fs-extra');

//---------------------------------------------------------------------------
cmd({
  pattern: "tyta",
  alias: ["test1"],
  desc: "YT song Downloader using youtube link",
  react: "🎶",
  category: "downloader"
},
async (Void, citel, text) => {
  if (!text) {
    citel.reply(`❌Please provide me a URL`);
    return;
  }
  try {
    let urlYt = text;
    if (!urlYt.startsWith("http")) {
      return citel.reply(`❌ Give a YouTube link!`);
    }

    const ytdlsong = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp3?url=${text}&apikey=intel-queen`);
    const songlink = ytdlsong.download;
    const songsize = ytdlsong.size;
    if (songsize <= 512,000) {
      return citel.reply(`❌ Audio file too big! You can download it using the link below:\n${songlink}`);
    }
    citel.reply(`*Hello ${citel.pushName}, Please wait... I'm downloading your song*`);
     await Void.sendMessage(citel.chat, {
      audio: {
        url: songlink,
      },
      caption: `⦿ Done ✅`,
      mimetype: "audio/mpeg",
      }, { quoted: citel });
  } catch (err) {
    console.log(err);
    citel.reply(`❌ Got an error: ${err}`);
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "tytv",
  alias: ["test2"],
  desc: "YT video Downloader using youtube link",
  react: "🎥",
  category: "downloader"
},
async (Void, citel, text) => {
  if (!text) {
    citel.reply(`❌ Please provide me a URL`);
    return;
  }
  try {
    let urlYt = text;
    if (!urlYt.startsWith("http")) {
      return citel.reply(`❌ Give a YouTube link!`);
    }

    const ytdlvideo = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp4?url=${text}&apikey=intel-queen`);
    const videolink = ytdlvideo.download;
    const title = ytdlvideo.title;
    const videosize = ytdlvideo.size;
    const thumb = ytdlvideo.thumbnail;

    if (videosize <= 512,000) {
      return citel.reply(`❌ Video file too big! You can download it using the link below:\n${videolink}`);
    }

    await Void.sendMessage(citel.chat, {
      image: {
        url: thumb,
      },
      caption: `*Hello ${citel.pushName}, Please wait... I am downloading your video file*\n╭─────◆\n│⿻ ${tlang().title}\n│ *YouTube Download*\n│⿻ *Title:* ${title}\n│⿻ *File size:* ${videosize}\n╰──────────◆\n⦿ *You can also download the video from the link below* 👇:\n${videolink}`,
      }, { quoted: citel });

    await Void.sendMessage(citel.chat, {
      video: {
        url: videolink,
      },
      caption: `⦿ Done ✅`,
      mimetype: "video/mp4",
      }, { quoted: citel });
  } catch (err) {
    console.log(err);
    citel.reply(`❌ An error occurred while processing your request. Please try again later.`);
  }
});
