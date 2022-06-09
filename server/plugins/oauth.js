const oauthPlugin = require('@fastify/oauth2')
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['https://www.googleapis.com/auth/youtube.readonly'],
    credentials: {
      client: {
        id: '220467536915-ujlbct1d979mpvlajik3hh2bckdegv3g.apps.googleusercontent.com',
        secret: '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',
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    // register a fastify url to start the redirect flow
    startRedirectPath: '/login/google',
    // facebook redirect here after the user login
    callbackUri: 'http://localhost:3000/login/google/callback',
  })
})
