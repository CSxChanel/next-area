const { userAgent } = require('next/server');

/** @type {import("next-sitemap").IConfig} */
module.exports = {
   siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
   generateRobotsTxt: true,
   robotsTxtPotions: {
      policies: [{ userAgent: '*', allow: '/' }],
   },
};
