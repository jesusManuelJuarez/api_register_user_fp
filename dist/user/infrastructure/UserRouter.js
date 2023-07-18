"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", Dependencies_1.getAllUserController.run.bind(Dependencies_1.getAllUserController));
exports.userRouter.get("/:idUser", Dependencies_3.getByIdUserController.run.bind(Dependencies_3.getByIdUserController));
exports.userRouter.post("/", Dependencies_2.createUserController.run.bind(Dependencies_2.createUserController));
exports.userRouter.delete("/:idUser", Dependencies_4.deleteByIdUserController.run.bind(Dependencies_4.deleteByIdUserController));
exports.userRouter.put("/:idUser", Dependencies_5.updateByIdUserController.run.bind(Dependencies_5.updateByIdUserController));
