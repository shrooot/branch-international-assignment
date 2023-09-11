const mongoose = require('mongoose')

const { Schema, model } = mongoose

const threadSchema = new Schema({
    title: String,
    userId: String,
    agentId: String,
})

threadSchema.set('timestamps', true)

module.exports = model("thread", threadSchema)