import express from "express";


import { getAllUserController } from "./Dependencies";
import { createUserController } from "./Dependencies";
import { getByIdUserController } from "./Dependencies";
import { deleteByIdUserController } from "./Dependencies";
import { updateByIdUserController } from "./Dependencies";

export const userRouter = express.Router();

userRouter.get("/", getAllUserController.run.bind(getAllUserController));
userRouter.get("/:idUser", getByIdUserController.run.bind(getByIdUserController));
userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.delete("/:idUser", deleteByIdUserController.run.bind(deleteByIdUserController));
userRouter.put("/:idUser", updateByIdUserController.run.bind(updateByIdUserController));
