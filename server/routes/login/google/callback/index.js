'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const token =
      await this.googleOAuth2.getAccesTokenFromAuthorizationCodeFlow(request)

    console.log(token.access_token)

    reply.send({ access_token: token.access_token })
  })
}
