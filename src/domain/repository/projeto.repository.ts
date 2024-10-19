import { Projeto } from "../entities/projeto";

export interface ProjetoRepository{
    save(projeto: Projeto): Promise<Projeto>
    findAll(): Promise<Projeto[]>
}

export const PROJETO_REPOSITORY = "PROJETO_REPOSITORY"