import { Login } from "../domain/Login";
import { LoginRepository } from "../domain/LoginRepository";
import { query } from "../../database/mysql";

export class MysqlLoginRepository implements LoginRepository {

  async getAll(): Promise<Login[] | null> {
    const sql = "SELECT * FROM login";
    try {
      const [info]: any = await query(sql, []);
      const infoLogin = Object.values(JSON.parse(JSON.stringify(info)));

      return infoLogin.map(
        (login: any) =>
          new Login(
            login.idLogin,
            login.email,
            login.password
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Login | null> {
    const sql = "SELECT * FROM login WHERE idLogin=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Login(
        result[0].idLogin,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }

  async createLogin(
    email: string,
    password: string
  ): Promise<Login | null> {
    const sql =
      "INSERT INTO login (email, password) VALUES (?, ?)";
    const params: any[] = [email, password ];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Login(result.insertId, email, password);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newLogin: Partial<Login>): Promise<Login | null> {
    const sql =
      "UPDATE login SET email = ?, password = ? WHERE idLogin = ?";
    const params: any[] = [
      newLogin.email || '', // Si newData.name es undefined, se asigna una cadena vacía
      newLogin.password || '',
      id, // Si newData.description es undefined, se asigna una cadena vacía
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedLogin = new Login(
        id,
        newLogin.email || '',
        newLogin.password || '',
      );
      return updatedLogin;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM login WHERE idLogin = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
