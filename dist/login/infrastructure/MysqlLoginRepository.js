"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlLoginRepository = void 0;
const Login_1 = require("../domain/Login");
const mysql_1 = require("../../database/mysql");
class MysqlLoginRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM login";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoLogin = Object.values(JSON.parse(JSON.stringify(info)));
                return infoLogin.map((login) => new Login_1.Login(login.idLogin, login.email, login.password));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM login WHERE idLogin=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Login_1.Login(result[0].idLogin, result[0].email, result[0].password);
            }
            catch (error) {
                return null;
            }
        });
    }
    createLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO login (email, password) VALUES (?, ?)";
            const params = [email, password];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Login_1.Login(result.insertId, email, password);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE login SET email = ?, password = ? WHERE idLogin = ?";
            const params = [
                newLogin.email || '',
                newLogin.password || '',
                id, // Si newData.description es undefined, se asigna una cadena vacía
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedLogin = new Login_1.Login(id, newLogin.email || '', newLogin.password || '');
                return updatedLogin;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM login WHERE idLogin = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                return false; // Error en la eliminación
            }
        });
    }
}
exports.MysqlLoginRepository = MysqlLoginRepository;
