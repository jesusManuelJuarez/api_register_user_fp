import express from "express";

import { createLoginController } from "./Dependencies";
import { getAllLoginController } from "./Dependencies";
import { getByIdLoginController } from "./Dependencies";
import { deleteByIdLoginController } from "./Dependencies";
import { updateByIdLoginController } from "./Dependencies";

export const loginRouter = express.Router();

loginRouter.get("/", getAllLoginController.run.bind(getAllLoginController));
loginRouter.get("/:idLogin", getByIdLoginController.run.bind(getByIdLoginController));
loginRouter.post("/", createLoginController.run.bind(createLoginController));
loginRouter.delete("/:idLogin", deleteByIdLoginController.run.bind(deleteByIdLoginController));
loginRouter.put("/:idLogin", updateByIdLoginController.run.bind(updateByIdLoginController));
