const Agent = require("../models/agent.model")

const findAgentInDb = async (searchParam, type) => {
    try {
        let user;
        if (type === 'name')
            user = await Agent.findOne({ name: searchParam }).exec()
        else
            user = await Agent.findById(searchParam).exec()
        return user;
    } catch (error) {
        throw error
    }
}

exports.createAgent = async (req, res) => {
    try {
        const agentData = req.body
        const existingAgent = await findAgentInDb(req.body.name, "name")
        if (existingAgent === null || existingAgent == undefined) {
            const newAgent = new Agent({
                name: agentData.name
            })
            const agent = await newAgent.save()
            res.status(200).json(agent)
        }
        else {
            res.status(200).json(existingAgent)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}