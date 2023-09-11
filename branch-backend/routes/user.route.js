const express = require('express')
const { createUser, getUser } = require('../controllers/user.controller')
const { getAllThreadsForUser } = require('../controllers/thread.controller')

const router = express.Router()

router.route('/create-user').post(createUser)         // create a new user
router.route('/get-info/:userId').get(getUser)
// router.route('/get-thread-chat/:threadId').get()   // get all messages in a thread
router.route('/get-all-threads/:userId').get(getAllThreadsForUser)            // gets all threads

module.exports = router