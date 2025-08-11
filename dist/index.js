"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./server");
dotenv_1.default.config();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = (0, server_1.createServer)();
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
