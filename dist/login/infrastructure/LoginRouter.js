"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.loginRouter = express_1.default.Router();
exports.loginRouter.get("/", Dependencies_2.getAllLoginController.run.bind(Dependencies_2.getAllLoginController));
exports.loginRouter.get("/:idLogin", Dependencies_3.getByIdLoginController.run.bind(Dependencies_3.getByIdLoginController));
exports.loginRouter.post("/", Dependencies_1.createLoginController.run.bind(Dependencies_1.createLoginController));
exports.loginRouter.delete("/:idLogin", Dependencies_4.deleteByIdLoginController.run.bind(Dependencies_4.deleteByIdLoginController));
exports.loginRouter.put("/:idLogin", Dependencies_5.updateByIdLoginController.run.bind(Dependencies_5.updateByIdLoginController));
