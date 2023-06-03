cmd(
  { on: "text" },
  async (Void, citel, text) => {
    if (!citel.quoted || citel.quoted.sender === citel.quoted.isBot) return;

    const quote = citel.quoted.text;
    const facebookPattern = /https?:\/\/(?:www\.)?facebook\.com\/[^\s]+/i;
    const instagramPattern = /https?:\/\/(?:www\.)?instagram\.com\/[^\s]+/i;
    const tiktokPattern = /https?:\/\/(?:www\.)?tiktok\.com\/[^\s]+/i;
    const youtubePattern = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[^\s]+/i;

    function detectURLTypeAndPerformTask(quote) {
      const isAudio = quote.includes("Finding Your Audio");
      const isVideo = quote.includes("Finding Your Video");

      if (facebookPattern.test(quote)) {
        if (isAudio) {
          citel.reply("Facebook Audio");
        } else if (isVideo) {
          citel.reply("Facebook Video");
        }
      } else if (instagramPattern.test(quote)) {
        if (isAudio) {
          citel.reply("Instagram Audio");
        } else if (isVideo) {
          citel.reply("Instagram Video");
        }
      } else if (tiktokPattern.test(quote)) {
        if (isAudio) {
          citel.reply("TikTok Audio");
        } else if (isVideo) {
          citel.reply("TikTok Video");
        }
      } else if (youtubePattern.test(quote)) {
        if (isAudio) {
          citel.reply("YouTube Video");
        } else if (isVideo) {
          citel.reply("YouTube Video");
        }
      }
    }

    if (text === "1" || text === "2") {
      detectURLTypeAndPerformTask(quote);
    }
  }
);
