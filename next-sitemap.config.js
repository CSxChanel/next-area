const { userAgent } = require("next/server");

/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: "https://indihome-area.com",
  generateRobotsTxt: true,
  robotsTxtPotions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
