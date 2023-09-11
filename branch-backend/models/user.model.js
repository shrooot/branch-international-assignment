const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    email: String,
    numberOfQueries: Number
})

userSchema.set('timestamps', true)

module.exports = model("user", userSchema)
