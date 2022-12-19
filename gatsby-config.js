/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `uniform-source-plugin`,
  ],
}
