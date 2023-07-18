import { Login } from "../domain/Login";
import { LoginRepository } from "../domain/LoginRepository";

export class GetAllLoginUseCase {
  constructor(readonly loginRepository: LoginRepository) {}

  async run(): Promise<Login[] | null> {
    try {
      const result = await this.loginRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}