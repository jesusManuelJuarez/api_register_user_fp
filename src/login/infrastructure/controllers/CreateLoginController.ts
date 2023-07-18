import { Request, Response } from "express";
import { CreateLoginUseCase } from "../../application/CreateLoginUseCase";
import { Login } from "../../domain/Login";

export class CreateLoginController {
  constructor(private readonly createLoginUseCase: CreateLoginUseCase) {}

  async run(req: Request, res: Response) {
    const Login = req.body;
    try {
      const login = await this.createLoginUseCase.run(
        Login.email,
        Login.password
      );
      
      if (login)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Data: {
            idLogin: login?.idLogin,
            email: login?.email,
            password: login?.password
          },
        });
      else
        res.status(204).send({
          status: "error",
          Data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        Data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
