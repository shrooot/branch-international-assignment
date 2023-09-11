const Thread = require("../models/thread.model")

exports.getThreads = async (searchParam, type) => {
    try {
        if (type === "user") {
            const threads = await Thread.find({ userId: searchParam })
            return threads
        }
        if (type === "agent") {
            const threads = await Thread.find({ agentId: searchParam })
            return threads
        }
        if (type === 'id') {
            const threads = await Thread.findById(searchParam)
            return threads
        }
    } catch (error) {
        throw error
    }
}

exports.getAllThreadsForUser = async (req, res) => {
    try {
        const threads = await this.getThreads(req.params.userId, "user")
        res.status(200).json(threads)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

exports.getAllThreadsForAgent = async (req, res) => {
    try {
        const threads = await this.getThreads(req.params.agentId, "agent")
        res.status(200).json(threads)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}