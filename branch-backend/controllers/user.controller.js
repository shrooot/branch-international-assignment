const User = require("../models/user.model");
const { getThreads } = require("./thread.controller");

const findUserInDb = async (searchParam, type) => {
    try {
        let user;
        if (type === 'email')
            user = await User.findOne({ email: searchParam }).exec()
        else
            user = await User.findById(searchParam).exec()
        return user;
    } catch (error) {
        throw error
    }
}

exports.createUser = async (req, res) => {
    try {
        console.log(req.body)
        const userData = req.body;
        const existingUser = await findUserInDb(userData.email, "email");
        if (existingUser === null || existingUser === undefined) {
            const newUser = new User({
                email: userData.email,
                numberOfQueries: 0
            })
            const user = await newUser.save()
            res.status(200).json(user)
        }
        else {
            res.status(200).json(existingUser)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await findUserInDb(req.params.userId, "id");
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}