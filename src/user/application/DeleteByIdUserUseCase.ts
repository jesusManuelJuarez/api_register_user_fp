import { UserRepository } from "../domain/UserRepository";

export class DeleteByIdUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedUser = await this.userRepository.deleteById(id);

      if (deletedUser) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
