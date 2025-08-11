"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EventShema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    location: { type: String },
    color: { type: String }
});
const Event = mongoose_1.default.model("Event", EventShema);
exports.default = Event;
