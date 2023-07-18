import { LoginRepository } from "../domain/LoginRepository";

export class DeleteByIdLoginUseCase {
  constructor(private readonly loginRepository: LoginRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedLogin = await this.loginRepository.deleteById(id);

      if (deletedLogin) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
