const { tlang, cmd, fetchJson, prefix, Config } = require('../lib');
const { yta, ytv } = require('y2matejs');

cmd({
  pattern: "testytmp4",
  desc: "Youtube Video Download",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    let info1 = await ytv(text, '720', 'id11');
    const linkget = info1.data.url;
    let videodes = `
*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Video*
╭─────◆
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${info1.title}
│⿻ *Duration:* ${info1.duration}
│⿻ *Viewers:* ${info1.views}
│⿻ *Uploaded:* ${info1.publish}
│⿻ *Author:* ${info1.channel}
│⿻ *Quality:* ${info1.data.quality}
│⿻ *Size:* ${info1.data.size}
╰────────◆   
⦿ *Url* : ${text}
`;    
    const vdlr = await Void.sendMessage(citel.chat, { image: { url: info1.thumbnail }, caption: videodes }, { quoted: citel });
    await Void.sendMessage(citel.chat, { react: { text: '〽️', key: vdlr.key } });
    const vdl2 = await Void.sendMessage(citel.chat, {
      video: {
        url: linkget,
      },
      jpegThumbnail: info1.thumbnail,
      caption: `*⦿Done* ✅`,
      mimetype: "video/mp4",
      fileName: info1.title + `.mp4`,
      headerType: 4,
    }, {
      quoted: citel,
    });
    const vdl = await Void.sendMessage(citel.chat, {
      document: {
        url: linkget,
      },
      mimetype: "video/mp4",
      caption: `*⦿ Done* ✅`,
      fileName: info1.title + `.mp4`,
    }, {
      quoted: citel,
    });
    await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl.key } });
    await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl2.key } });
    await Void.sendMessage(citel.chat, { react: { text: '✅', key: vdlr.key } });
  } catch (err) {
    try {
      let info1 = await ytv(text, '480', 'id11');
      const linkget = info1.data.url;
      let videodes = `
*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Video*
╭─────◆
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${info1.title}
│⿻ *Duration:* ${info1.duration}
│⿻ *Viewers:* ${info1.views}
│⿻ *Uploaded:* ${info1.publish}
│⿻ *Author:* ${info1.channel}
│⿻ *Quality:* ${info1.data.quality}
│⿻ *Size:* ${info1.data.size}
╰────────◆   
⦿ *Url* : ${text}
`;    
      const vdlr = await Void.sendMessage(citel.chat, { image: { url: info1.thumbnail }, caption: videodes }, { quoted: citel });
      await Void.sendMessage(citel.chat, { react: { text: '〽️', key: vdlr.key } });
      const vdl2 = await Void.sendMessage(citel.chat, {
        video: {
          url: linkget,
        },
        jpegThumbnail: info1.thumbnail,
        caption: `*⦿Done* ✅ `,
        mimetype: "video/mp4",
        fileName: info1.title + `.mp4`,
        headerType: 4,
      }, {
        quoted: citel,
      });
      const vdl = await Void.sendMessage(citel.chat, {
        document: {
          url: linkget,
        },
        mimetype: "video/mp4",
        caption: `*⦿ Done* ✅`,
        fileName: info1.title + `.mp4`,
      }, {
        quoted: citel,
      });
      await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl.key } });
      await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl2.key } });
      await Void.sendMessage(citel.chat, { react: { text: '✅', key: vdlr.key } });
    } catch (err) {
      try {
        let info1 = await ytv(text, '360', 'id11');
        const linkget = info1.data.url;
        let videodes = `
*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Video*
╭─────◆
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${info1.title}
│⿻ *Duration:* ${info1.duration}
│⿻ *Viewers:* ${info1.views}
│⿻ *Uploaded:* ${info1.publish}
│⿻ *Author:* ${info1.channel}
│⿻ *Quality:* ${info1.data.quality}
│⿻ *Size:* ${info1.data.size}
╰────────◆   
⦿ *Url* : ${text}
`;    
        const vdlr = await Void.sendMessage(citel.chat, { image: { url: info1.thumbnail }, caption: videodes }, { quoted: citel });
        await Void.sendMessage(citel.chat, { react: { text: '〽️', key: vdlr.key } });
        const vdl2 = await Void.sendMessage(citel.chat, {
          video: {
            url: linkget,
          },
          jpegThumbnail: info1.thumbnail,
          caption: `*⦿Done* ✅ `,
          mimetype: "video/mp4",
          fileName: info1.title + `.mp4`,
          headerType: 4,
        }, {
          quoted: citel,
        });
        const vdl = await Void.sendMessage(citel.chat, {
          document: {
            url: linkget,
          },
          mimetype: "video/mp4",
          caption: `*⦿ Done* ✅`,
          fileName: info1.title + `.mp4`,
        }, {
          quoted: citel,
        });
        await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl.key } });
        await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl2.key } });
        await Void.sendMessage(citel.chat, { react: { text: '✅', key: vdlr.key } });
      } catch (err) {
        console.log(err);
        citel.reply(`❌ An error occurred while processing your request. Please try again later.`);
      }
    }
  }
});

cmd({
  pattern: "testytmp3",
  desc: "Youtube Audio Download",
  react: "📥",
  category: "downloader"
},
async (Void, citel, text) => {
  try {
    let info1 = await yta(text, 'id11');
    const linkgetaud = info1.data.url;
    let audiodes = `
*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Audio*
╭─────◆
│⿻ ${tlang().title} 
│  *Youtube Player* ✨
│⿻ *Title:* ${info1.title}
│⿻ *Duration:* ${info1.duration}
│⿻ *Viewers:* ${info1.views}
│⿻ *Uploaded:* ${info1.publish}
│⿻ *Author:* ${info1.channel}
│⿻ *Quality:* ${info1.data.quality}
│⿻ *Size:* ${info1.data.size}
╰────────◆   
⦿ *Url* : ${text}
`;    
    const vdlr = await Void.sendMessage(citel.chat, { image: { url: info1.thumbnail }, caption: audiodes }, { quoted: citel });
    await Void.sendMessage(citel.chat, { react: { text: '〽️', key: vdlr.key } });
    const vdl2 = await Void.sendMessage(citel.chat, {
      audio: {
        url: linkgetaud,
      },
      mimetype: "audio/mpeg",
      fileName: info1.title + `.mp3`,
    }, {
      quoted: citel,
    });
    const vdl = await Void.sendMessage(citel.chat, {
      document: {
        url: linkgetaud,
      },
      mimetype: "audio/mpeg",
      fileName: info1.title + `.mp3`,
    }, {
      quoted: citel,
    });
    await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl.key } });
    await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl2.key } });
    await Void.sendMessage(citel.chat, { react: { text: '✅', key: vdlr.key } });
  } catch (err) {
    console.log(err);
    citel.reply(`❌ An error occurred while processing your request. Please try again later.`);
  }
});
