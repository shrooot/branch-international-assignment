const Message = require("../models/message.model")
const Thread = require("../models/thread.model");
const { getThreads } = require("./thread.controller");

const msgStatus = Object.freeze({
    active: 'active',
    unresolved: 'unresolved'
})

exports.createQuery = async (req, res) => {
    try {
        const msgData = req.body;
        const newMessage = new Message({
            userId: msgData.userId,
            message: msgData.message,
            status: msgStatus.unresolved,
            threadId: msgData.threadId,
            from: "user"
        })
        await newMessage.save();
        res.status(200).json({ "Message": "Query created successfully" })
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.getUnresondedMessages = async (req, res) => {
    try {
        const msgs = await Message.find({ status: msgStatus.unresolved })
        res.status(200).json({ 'messages': msgs })
    } catch (error) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.claimChat = async (req, res) => {
    try {
        const agentId = req.body.agentId
        const messageId = req.body.messageId
        const threadName = req.body.threadName

        let message_doc = await Message.findById(messageId)
        const userId = message_doc.userId
        console.log(userId, agentId)

        if (message_doc.status === msgStatus.active)
            return res.status(400).json("Already Claimed")

        let newThread = await Thread.create({
            title: threadName,
            userId: userId,
            agentId: agentId
        })

        console.log(newThread)
        message_doc.status = msgStatus.active
        message_doc.threadId = newThread._id

        await newThread.save()
        await message_doc.save()

        res.status(200).json({ 'threadId': newThread._id })

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

exports.getAllMessagesInThread = async (req, res) => {
    try {
        const threadId = req.params.threadId
        let messagesInThread = await Message.find({ threadId: threadId })
        res.status(200).json({ 'messages': messagesInThread })
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

exports.createThreadMessage = async (req, res) => {
    try {
        const msgData = req.body;
        const thread = await getThreads(msgData.threadId, "id")

        const newMessage = new Message({
            userId: thread.userId,
            message: msgData.message,
            status: msgStatus.active,
            threadId: msgData.threadId,
            from: msgData.from
        })

        let msg = await newMessage.save();
        res.status(200).json(msg)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}