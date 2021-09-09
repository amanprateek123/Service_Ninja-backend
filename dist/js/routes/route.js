"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/authentication");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
//user auth
router.post("/api/consumerReg", authentication_1.consReg);
router.post("/api/consumerLogin", authentication_1.consLogin);
router.post("/api/welcome", auth_1.default, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});
exports.default = router;
