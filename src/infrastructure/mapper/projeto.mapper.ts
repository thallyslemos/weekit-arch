import { Projeto } from "src/domain/entities/projeto"
import { Usuario } from "src/domain/entities/usuario"
import { ProjetoPrisma } from "../entities/projeto-prisma.entity"
import { Tarefa } from "src/domain/entities/tarefa"

export class ProjetoMapper {
    static toDomain(data: ProjetoPrisma): Projeto {
        const newProjeto = new Projeto({
            ...data,
            responsavel: data.responsavel ? new Usuario(data.responsavel?.nome, data.responsavel?.id) : null,
            tarefas: data.tarefas ? data.tarefas.map(
                tarefa => new Tarefa(tarefa.titulo, tarefa.descricao, tarefa.finalizada, tarefa.id
                )) : []
        })
        return newProjeto
    }

    static toPersistence(data: Projeto): ProjetoPrisma {
        return {
            dataFim: data.getPeriodo().getDataFim(),
            dataInicio: data.getPeriodo().getDataInicio(),
            id: data.getId(),
            nome: data.getNome(),
            responsavelId: data.getResponsavel().getId()
        }
    }
}