const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    userId: String,
    message: String,
    status: String,
    from: String,
    threadId: { type: String, default: null },
})

messageSchema.set('timestamps', true)

module.exports = mongoose.model("Message", messageSchema)