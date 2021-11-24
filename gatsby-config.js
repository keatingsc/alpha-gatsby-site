module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/my-first-gatsby-site.xml`,
      },
    },
  ],
};
