import { GetAllLoginUseCase } from "../application/GetAllLoginUseCase";
import { CreateLoginUseCase } from "../application/CreateLoginUseCase";
import { GetByIdLoginUseCase } from "../application/GetByIdLoginUseCase";
import { DeleteByIdLoginUseCase } from "../application/DeleteByIdLoginUseCase";
import { UpdateByIdLoginUseCase } from "../application/UpdateByIdLoginUseCase";
import { CreateLoginController } from "./controllers/CreateLoginController";
import { GetAllLoginController } from "./controllers/GetAllLoginController";
import { GetByIdLoginController } from "./controllers/GetByIdLoginController";
import { UpdateByIdLoginController } from "./controllers/UpdateByIdLoginController";
import { DeleteByIdLoginController } from "./controllers/DeleteByIdLoginController";
import { MysqlLoginRepository } from "./MysqlLoginRepository";

export const mysqlLoginRepository = new MysqlLoginRepository();

export const createLoginUseCase = new CreateLoginUseCase(
    mysqlLoginRepository
  );
export const getAllUseCase = new GetAllLoginUseCase(mysqlLoginRepository);

export const getByIdLoginUseCase = new GetByIdLoginUseCase(
    mysqlLoginRepository
  );

export const updateByIdLoginUseCase = new UpdateByIdLoginUseCase(
    mysqlLoginRepository
    );

export const deleteByIdLoginUseCase = new DeleteByIdLoginUseCase(
    mysqlLoginRepository
    );

export const createLoginController = new CreateLoginController(
    createLoginUseCase
);
export const getAllLoginController = new GetAllLoginController(
    getAllUseCase
);

export const getByIdLoginController = new GetByIdLoginController(
    getByIdLoginUseCase
);
export const deleteByIdLoginController = new DeleteByIdLoginController(
    deleteByIdLoginUseCase
    );
export const updateByIdLoginController = new UpdateByIdLoginController(
    updateByIdLoginUseCase
    );
  