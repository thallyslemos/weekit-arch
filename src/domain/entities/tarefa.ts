import { randomUUID } from "crypto"

export class Tarefa {
    private id: string
    private titulo: string
    private descricao: string
    private finalizada: boolean

    constructor(
        titulo:string, 
        descricao:string, 
        finalizada?:boolean,
        id?:string,
    ){
        this.titulo = titulo
        this.descricao = descricao
        this.id = id ?? randomUUID()
        this.finalizada = finalizada ?? false
    }
}