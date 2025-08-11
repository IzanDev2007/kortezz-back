"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const linkSchema = new mongoose_1.default.Schema({
    _id: { type: String, required: true },
    url: { type: String, required: true, trim: true },
});
const Link = mongoose_1.default.model("link", linkSchema);
exports.default = Link;
