import { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[] | null>;

  getById(id: number): Promise<User | null>;

  updateById(id: number, user: User): Promise<User | null>;
  deleteById(id: number): Promise<boolean>;

  createUser(
    name: string,
    email: string,
    password : string,
    idPlanFP : number
  ): Promise<User | null>;
}
