import { GetAllUserUseCase } from "../application/GetAllUserUseCase";
import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetByIdUserUseCase } from "../application/GetByIdUserUseCase";
import { DeleteByIdUserUseCase } from "../application/DeleteByIdUserUseCase";
import { UpdateByIdUserUseCase } from "../application/UpdateByIdUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { UpdateByIdUserController } from "./controllers/UpdateByIdUserController";
import { DeleteByIdUserController } from "./controllers/DeleteByIdUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserUseCase = new CreateUserUseCase(
    mysqlUserRepository
  );
export const getAllUserUseCase = new GetAllUserUseCase(mysqlUserRepository);

export const getByIdUserUseCase = new GetByIdUserUseCase(
    mysqlUserRepository
  );

export const updateByIdUserUseCase = new UpdateByIdUserUseCase(
    mysqlUserRepository
    );

export const deleteByIdUserUseCase = new DeleteByIdUserUseCase(
    mysqlUserRepository
    );

export const createUserController = new CreateUserController(
    createUserUseCase
);
export const getAllUserController = new GetAllUserController(
    getAllUserUseCase
);

export const getByIdUserController = new GetByIdUserController(
    getByIdUserUseCase
);
export const deleteByIdUserController = new DeleteByIdUserController(
    deleteByIdUserUseCase
    );
export const updateByIdUserController = new UpdateByIdUserController(
    updateByIdUserUseCase
    );
  