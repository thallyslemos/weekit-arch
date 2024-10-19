import { Module } from "@nestjs/common";
import { ProjetoController } from "../controller/projeto.controller";
import { ProjetoPrismaOrmRepository } from "../repository/projeto-prisma.repository";
import { SaveProjetoUseCase } from "src/domain/usecases/save-projeto.usecase";
import { PROJETO_REPOSITORY } from "src/domain/repository/projeto.repository";
import { PrismaService } from "../service/prisma.service";
import { USUARIO_REPOSITORY } from "src/domain/repository/usuario.repository";
import { UsuarioPrismaOrmRepository } from "../repository/usuario.primsa.repository";
import { FindAllProjetosUseCase } from "src/domain/usecases/find-all-projetos.usecase";

@Module({
    controllers:[ProjetoController],
    providers:[
        SaveProjetoUseCase,
        FindAllProjetosUseCase,
        ProjetoPrismaOrmRepository,
        PrismaService, 
        {
            provide: PROJETO_REPOSITORY,
            useClass: ProjetoPrismaOrmRepository
        },
        {
            provide: USUARIO_REPOSITORY,
            useClass: UsuarioPrismaOrmRepository
        }
    ]
})
export class ProjetoModule{}