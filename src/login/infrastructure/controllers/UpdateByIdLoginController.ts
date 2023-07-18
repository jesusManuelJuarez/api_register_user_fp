import { Request, Response } from "express";
import { UpdateByIdLoginUseCase } from "../../application/UpdateByIdLoginUseCase";

export class UpdateByIdLoginController {
  constructor(readonly updateByIdLoginUseCase: UpdateByIdLoginUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idLogin);
    const newLogin = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedLogin = await this.updateByIdLoginUseCase.run(id, newLogin);

      if (updatedLogin) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idLogin: updatedLogin.idLogin,
            email: updatedLogin.email,
            password: updatedLogin.password
          },
        });
      } else {
        // Código HTTP: 400 -> Error de actualización
        res.status(400).send({
          status: "error",
          msn: "No se pudo actualizar el dato",
        });
      }
    } catch (error) {
      // Código HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        info: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
