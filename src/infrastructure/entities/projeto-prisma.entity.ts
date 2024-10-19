import { Projeto, Tarefa, Usuario } from "@prisma/client";

export class ProjetoPrisma implements Projeto {
    id: string;
    nome: string;
    responsavelId: string;
    dataInicio: Date;
    dataFim: Date;
    tarefas?: Tarefa[];
    responsavel?: Usuario
}