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
exports.login = void 0;
const auth_1 = require("../utils/auth");
const Admin_1 = __importDefault(require("../models/Admin"));
const auth_2 = require("../utils/auth");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        const admin = yield Admin_1.default.findOne({ name });
        if (!admin) {
            res.status(401).json({ message: "incorrect credencials" });
            return;
        }
        const validPassword = yield (0, auth_1.verifyPassword)(password, admin.password);
        if (!validPassword) {
            res.status(401).json({ message: "incorrect credencials" });
            return;
        }
        const jwt = yield (0, auth_2.generateJWT)({ id: admin._id });
        res.status(200).send(jwt);
    }
    catch (e) {
        res.status(400).json({
            status: "error"
        });
    }
});
exports.login = login;
