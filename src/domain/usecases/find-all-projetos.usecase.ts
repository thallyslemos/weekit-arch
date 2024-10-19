import { Inject } from "@nestjs/common";
import { PROJETO_REPOSITORY, ProjetoRepository } from "../repository/projeto.repository";

export class FindAllProjetosUseCase {
    constructor(
        @Inject(PROJETO_REPOSITORY) private repository: ProjetoRepository
    ) {}

    async execute(){
        return this.repository.findAll()
    }
}