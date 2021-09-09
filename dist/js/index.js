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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const route_1 = __importDefault(require("./routes/route"));
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(route_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));
//     // Handle React routing, return all requests to React app
//     app.get('*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
// }
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello Ninjas!");
}));
//database
const connection = "mongodb://localhost:27017/ServiceNinja";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(connection, options);
mongoose_1.default.connection.on("connected", () => {
    console.log("connected to database");
});
app.listen(port, () => {
    console.log("Server is connected at " + port);
});
