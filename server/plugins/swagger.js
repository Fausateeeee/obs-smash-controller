'use strict'

const fp = require('fastify-plugin')
const swaggerPlugin = require('@fastify/swagger')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(swaggerPlugin, {
    routePrefix: '/swagger',
    swagger: {
      info: {
        title: 'Swagger',
        description: 'Fastify API with swagger',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true,
  })
})
