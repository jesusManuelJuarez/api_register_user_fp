import { Request, Response } from "express";
import { GetAllLoginUseCase } from "../../application/GetAllLoginUseCase";

export class GetAllLoginController {
  constructor(readonly getAllLoginUseCase: GetAllLoginUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const logins = await this.getAllLoginUseCase.run();
      console.log(logins);
      if (logins)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: logins.map((login: any) => {
            return {
              idLogin: login.idLogin,
              email: login.email,
              password: login.password
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
