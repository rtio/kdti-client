const { Nuxt } = require('@nuxt/core')

const config = require('./nuxt.config.js')

const nuxt = new Nuxt({
  ...config,
  buildModules: [],
  dev: false,
})

module.exports = (req, res) =>
  nuxt.ready().then(() => nuxt.server.app(req, res))
