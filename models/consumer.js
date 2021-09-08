const mongoose = require('mongoose')

const consumerSchema = new mongoose.Schema({
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: Number
    }
})

const Consumer = mongoose.model('Consumer', consumerSchema);
module.exports = Consumer;