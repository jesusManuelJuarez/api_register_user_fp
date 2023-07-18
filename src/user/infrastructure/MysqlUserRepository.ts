import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { query } from "../../database/mysql";

export class MysqlUserRepository implements UserRepository {


  async getAll(): Promise<User[] | null> {
    const sql = "SELECT * FROM user";
    try {
      const [info]: any = await query(sql, []);
      const infoUser = Object.values(JSON.parse(JSON.stringify(info)));

      return infoUser.map(
        (user: any) =>
          new User(
            user.idUser,
            user.name,
            user.email,
            user.password,
            user.idPlanFP
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<User | null> {
    const sql = "SELECT * FROM user WHERE idUser=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(
        result[0].idUser,
        result[0].name,
        result[0].email,
        result[0].password,
        result[0].idPlanFP
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    name: string,
    email: string,
    password: string,
    idPlanFP: number
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (name, email, password,idPlanFP) VALUES (?, ?, ?, ?)";
    const params: any[] = [name, email, password,idPlanFP];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(result.insertId, name, email, password,idPlanFP);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newUser: Partial<User>): Promise<User | null> {
    const sql =
      "UPDATE user SET name = ?, email = ?, password = ?, idPlanFP = ? WHERE idUser = ?";
    const params: any[] = [
      newUser.name || '', // Si newData.name es undefined, se asigna una cadena vacía
      newUser.email || '', // Si newData.description es undefined, se asigna una cadena vacía
      newUser.password || '', // Si newData.type es undefined, se asigna una cadena vacía // Si newData.website es undefined, se asigna una cadena vacía
      newUser.idPlanFP || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedUser = new User(
        id,
        newUser.name || '',
        newUser.email || '',
        newUser.password || '',
        newUser.idPlanFP || 0
      );
      return updatedUser;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM user WHERE idUser = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
