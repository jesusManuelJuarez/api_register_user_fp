import { Request, Response } from "express";
import { UpdateByIdUserUseCase } from "../../application/UpdateByIdUserUseCase";

export class UpdateByIdUserController {
  constructor(readonly updateByIdUserUseCase: UpdateByIdUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idUser);
    const newUser = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedUser = await this.updateByIdUserUseCase.run(id, newUser);

      if (updatedUser) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idUser: updatedUser.idUser,
            name: updatedUser.name,
            email: updatedUser.email,
            password: updatedUser.password,
            idPlanFP: updatedUser.idPlanFP
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
