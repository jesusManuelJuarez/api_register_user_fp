import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../application/GetAllUserUseCase";

export class GetAllUserController {
  constructor(readonly getAllUserUseCase: GetAllUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.getAllUserUseCase.run();
      console.log(users);
      if (users)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: users.map((user: any) => {
            return {
              idUser: user.idUser,
              name: user.name,
              email: user.email,
              idPlanFP: user.idPlanFP
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        info: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
