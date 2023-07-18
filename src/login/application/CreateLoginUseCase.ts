import { Login } from "../domain/Login";
import { LoginRepository } from "../domain/LoginRepository";

export class CreateLoginUseCase {
  constructor(readonly loginRepository: LoginRepository) {}

  async run(
    email: string,
    password: string
  ): Promise<Login | null> {
    try {
      const login = await this.loginRepository.createLogin(
        email,
        password
      );
      return login;
    } catch (error) {
      return null;
    }
  }
}
