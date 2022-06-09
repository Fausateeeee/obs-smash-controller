'use strict'
const service = require('../../services/video/videoServices')

module.exports = async function (fastify, opts) {
  fastify.post(
    '/',

    async function (request, reply) {
      const { data } = request
      await service.appendMetaDataFile(data)
    },
  )
}
