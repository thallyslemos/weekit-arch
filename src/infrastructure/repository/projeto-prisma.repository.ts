import { PrismaService } from './../service/prisma.service';
import { Injectable } from "@nestjs/common";
import { Projeto as DomainProjeto } from "src/domain/entities/projeto";
import { ProjetoRepository } from "src/domain/repository/projeto.repository";
import { ProjetoMapper } from "../mapper/projeto.mapper";

@Injectable()
export class ProjetoPrismaOrmRepository implements ProjetoRepository{

    constructor(
        private db: PrismaService
    ){}

	async save(projeto: DomainProjeto): Promise<DomainProjeto> {
        const {dataFim,dataInicio,id,nome,responsavelId} = ProjetoMapper.toPersistence(projeto)
        const novoProjeto = await this.db.projeto.create({
            data: {dataFim,dataInicio,id,nome,responsavelId},
            include: {responsavel: true}
        })
        return ProjetoMapper.toDomain(novoProjeto)
	}

    async findAll(): Promise<DomainProjeto[]> {
        const projetos = await this.db.projeto.findMany({
            include: {responsavel: true}
        })
        return projetos.map(projeto => ProjetoMapper.toDomain(projeto))
    }
}