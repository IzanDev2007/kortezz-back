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
exports.deleteImage = exports.uploadImage = exports.getImages = void 0;
const Image_1 = __importDefault(require("../models/Image"));
const getImages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allImages = yield Image_1.default.find();
        res.status(200).send(allImages);
    }
    catch (err) { }
    res.status(500).json({
        status: "internal error"
    });
});
exports.getImages = getImages;
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = new Image_1.default(req.body);
        yield image.save();
        res.status(201).json({ status: "created" });
    }
    catch (err) {
        res.status(500).json({
            status: "internal error"
        });
    }
});
exports.uploadImage = uploadImage;
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Image_1.default.findByIdAndDelete(id);
        res.status(200).send({ status: "deleted" });
    }
    catch (err) {
        res.status(500).json({
            status: "internal error"
        });
    }
});
exports.deleteImage = deleteImage;
