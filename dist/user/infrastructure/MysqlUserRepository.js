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
exports.MysqlUserRepository = void 0;
const User_1 = require("../domain/User");
const mysql_1 = require("../../database/mysql");
class MysqlUserRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM user";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoUser = Object.values(JSON.parse(JSON.stringify(info)));
                return infoUser.map((user) => new User_1.User(user.idUser, user.name, user.email, user.password, user.idPlanFP));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM user WHERE idUser=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result[0].idUser, result[0].name, result[0].email, result[0].password, result[0].idPlanFP);
            }
            catch (error) {
                return null;
            }
        });
    }
    createUser(name, email, password, idPlanFP) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO user (name, email, password,idPlanFP) VALUES (?, ?, ?, ?)";
            const params = [name, email, password, idPlanFP];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result.insertId, name, email, password, idPlanFP);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE user SET name = ?, email = ?, password = ?, idPlanFP = ? WHERE idUser = ?";
            const params = [
                newUser.name || '',
                newUser.email || '',
                newUser.password || '',
                newUser.idPlanFP || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedUser = new User_1.User(id, newUser.name || '', newUser.email || '', newUser.password || '', newUser.idPlanFP || 0);
                return updatedUser;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM user WHERE idUser = ?";
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
exports.MysqlUserRepository = MysqlUserRepository;
