import { Login } from "../domain/Login";
import { LoginRepository } from "../domain/LoginRepository";

export class GetByIdLoginUseCase {
  constructor(readonly loginRepository: LoginRepository) {}

  async run(id: number): Promise<Login | null> {
    try {
      const result = await this.loginRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
