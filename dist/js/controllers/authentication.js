"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consLogin = exports.consReg = void 0;
const consumer_1 = __importDefault(require("../models/consumer"));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const consReg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user1 = yield consumer_1.default.find({ phone: req.body.phone });
        const user2 = yield consumer_1.default.find({ email: req.body.email });
        if (user1.length > 0) {
            res.json("User with this phone number is already exist");
            return;
        }
        if (user2.length > 0) {
            res.json("User with this email is already exist");
            return;
        }
        const encryptPass = yield bcrypt.hash(req.body.password, 10);
        const cons = new consumer_1.default(Object.assign(Object.assign({}, req.body), { password: encryptPass }));
        yield cons.save();
        res.json(req.body);
    }
    catch (e) {
        res.json(e);
    }
});
exports.consReg = consReg;
const consLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone, password } = req.body;
        console.log(req.body);
        const user = yield consumer_1.default.find({ phone });
        if (user && (yield bcrypt.compare(password, user[0].password))) {
            const token = jwt.sign({ phone }, 'jaimatadi');
            res.status(200).json(token);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (e) {
        console.log(e);
    }
});
exports.consLogin = consLogin;
