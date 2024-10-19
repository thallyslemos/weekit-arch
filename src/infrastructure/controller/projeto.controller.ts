import { FindAllProjetosUseCase } from 'src/domain/usecases/find-all-projetos.usecase';
import { CreateProjetoDtoApi } from '../dto/create-projeto.dto-api';
import { SaveProjetoUseCase } from './../../domain/usecases/save-projeto.usecase';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("projeto")
export class ProjetoController {

    constructor(
        private readonly saveProjetoUseCase: SaveProjetoUseCase,
        private readonly findAllProjetosUseCase: FindAllProjetosUseCase
    ) { }

    @Post()
    async create(@Body() body: CreateProjetoDtoApi) {
        return await this.saveProjetoUseCase.execute(body.nome, body.responsavel, body.dataFim)
    }

    @Get()
    async findAll() {
        return await this.findAllProjetosUseCase.execute()
    }
}