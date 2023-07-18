import { Login } from "./Login";

export interface LoginRepository {
  getAll(): Promise<Login[] | null>;

  getById(id: number): Promise<Login | null>;

  updateById(id: number, login: Login): Promise<Login | null>;
  deleteById(id: number): Promise<boolean>;

  createLogin(
    email: string,
    password: string,
  ): Promise<Login | null>;
}
