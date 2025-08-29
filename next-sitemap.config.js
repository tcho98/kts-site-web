/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ktsmobility.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/secret-page"], // si tu as des pages à exclure
};
