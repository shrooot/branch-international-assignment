const mongoose = require('mongoose')
const { UUID } = require('mongodb')

const {Schema, model} = mongoose

const agentSchema = Schema({
    name: String
})

module.exports = model('agent', agentSchema)