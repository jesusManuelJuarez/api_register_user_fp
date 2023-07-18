import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UpdateByIdUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: number, newUser: Partial<User>): Promise<User | null> {
    try {
      // Verificar si el dato existe
      const existingUser = await this.userRepository.getById(id);
      if (!existingUser) {
        return null;
      }

      // Realizar la actualización
      const updatedUser = {
        ...existingUser,
        ...newUser,
      };

      const result = await this.userRepository.updateById(id, updatedUser);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
