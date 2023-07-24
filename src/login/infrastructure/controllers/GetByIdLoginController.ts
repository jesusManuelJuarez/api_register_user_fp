import { Request, Response } from "express";
import { GetByIdLoginUseCase } from "../../application/GetByIdLoginUseCase";

export class GetByIdLoginController {
  constructor(readonly getByIdLoginUseCase: GetByIdLoginUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idLogin);
    try {
      const login = await this.getByIdLoginUseCase.run(id);

      if (login)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idLogin: login.idLogin,
              email: login.email,
          },
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
