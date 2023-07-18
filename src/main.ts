import express from "express";
import { loginRouter } from "./login/infrastructure/LoginRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

import { Signale } from "signale";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


const app = express();



const signale = new Signale();

app.use(express.json());
const swaggerDocument = YAML.load('swagger.yaml');


// Rutas para los recursos de login and user
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
  signale.success("[Application] Server online on port 3000");
  //console.log("funtional in port 3000");
});