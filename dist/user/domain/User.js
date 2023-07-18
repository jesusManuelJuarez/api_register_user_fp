"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(idUser, name, email, password, idPlanFP) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.idPlanFP = idPlanFP;
    }
}
exports.User = User;
