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
exports.deleteEvent = exports.addEvent = exports.getEvent = void 0;
const Event_1 = __importDefault(require("../models/Event"));
const getEvent = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield Event_1.default.find();
        res.status(200).send(events);
    }
    catch (err) {
        res.status(500).json({
            status: "internal error"
        });
    }
});
exports.getEvent = getEvent;
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Cuerpo recibido en addEvent:', req.body);
        const event = new Event_1.default(req.body);
        yield event.save();
        console.log('Evento guardado correctamente');
        res.status(201).json({ status: 'created' });
    }
    catch (error) {
        console.error('Error al crear evento:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
});
exports.addEvent = addEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Event_1.default.findByIdAndDelete(id);
        res.status(200).send({
            status: "deleted"
        });
    }
    catch (err) {
        res.status(500).json({
            status: "internal error"
        });
    }
});
exports.deleteEvent = deleteEvent;
