import { randomUUID } from "crypto"
import { Periodo } from "../vo/periodo"
import { Tarefa } from "./tarefa"
import { Usuario } from "./usuario"

export type ProjetoProps = {
    nome:string,
    dataFim:Date,
    responsavel:Usuario,
    dataInicio?: Date,
    id?: string,
    tarefas?: Tarefa[]
}

export class Projeto {
    private id: string
    private nome: string
    private periodo: Periodo
    private responsavel: Usuario
    private tarefas: Tarefa[]

    constructor({nome, dataFim, responsavel, dataInicio, id, tarefas}:ProjetoProps){
        const comeco = dataInicio ?? new Date()
        this.periodo = new Periodo(comeco, dataFim)
        this.id = id ?? randomUUID()
        this.nome = nome
        this.responsavel = responsavel
        this.tarefas = tarefas ?? []

        if(nome.length < 5){
            throw new Error("Nome não pode ter menos do que 5 caracteres.")
        }
    }

    getId = () => this.id
    getNome = () => this.nome
    getPeriodo = () => this.periodo
    getResponsavel = () => this.responsavel
    getTarefas = () => this.tarefas
}