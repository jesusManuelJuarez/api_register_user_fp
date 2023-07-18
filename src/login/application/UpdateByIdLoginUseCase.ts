import { Login } from "../domain/Login";
import { LoginRepository } from "../domain/LoginRepository";

export class UpdateByIdLoginUseCase {
  constructor(readonly loginRepository: LoginRepository) {}

  async run(id: number, newLogin: Partial<Login>): Promise<Login | null> {
    try {
      // Verificar si el dato existe
      const existingLogin = await this.loginRepository.getById(id);
      if (!existingLogin) {
        return null;
      }

      // Realizar la actualización
      const updatedLogin = {
        ...existingLogin,
        ...newLogin,
      };

      const result = await this.loginRepository.updateById(id, updatedLogin);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
