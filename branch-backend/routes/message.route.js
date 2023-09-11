const express = require('express')
const { createQuery, getUnresondedMessages, claimChat, getAllMessagesInThread, createThreadMessage } = require('../controllers/message.controller')

const router = express.Router()

router.route('/create-message').post(createQuery)      // create a new message
router.route('/create-thread-message').post(createThreadMessage)      // create a new thread message
router.route('/new-messages').get(getUnresondedMessages)             // returns new messages that are not assigned agent
router.route('/claim-chat').post(claimChat)             //  agent claims a chat 
router.route('/get-thread-message/:threadId').get(getAllMessagesInThread)

module.exports = router