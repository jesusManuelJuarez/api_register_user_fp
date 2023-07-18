import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import { User } from "../../domain/User";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const User = req.body;
    try {
      const user = await this.createUserUseCase.run(
        User.name,
        User.email,
        User.password,
        User.idPlanFP
      );

      if (user)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          User: {
            idUser: user?.idUser,
            name: user?.name,
            email: user?.email,
            password: user?.password,
            idPlanFP: user?.idPlanFP
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
