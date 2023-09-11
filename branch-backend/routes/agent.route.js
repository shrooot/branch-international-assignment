const express = require('express')
const { createAgent } = require('../controllers/agent.controller')
const { getAllThreadsForAgent } = require('../controllers/thread.controller')

const router = express.Router()

router.route("/create-agent").post(createAgent)            // creates a new agent
router.route('/get-all-threads/:agentId').get(getAllThreadsForAgent)

module.exports = router