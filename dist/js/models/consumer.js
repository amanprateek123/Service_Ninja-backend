"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const consumerSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Consumer", consumerSchema);
