"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const db_1 = require("./config/db");
const cors_2 = require("./config/cors");
function createServer() {
    const app = (0, express_1.default)();
    (0, db_1.connectDB)();
    app.use((0, cors_1.default)(cors_2.corsConfig));
    app.use(express_1.default.json({ limit: '10mb' }));
    app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
    app.use('/', routes_1.default);
    return app;
}
