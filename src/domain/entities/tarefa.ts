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
        this._validate()
    }

    public getId = () => this.id
    public getTitulo = () => this.titulo
    public getDescricao = () => this.descricao
    public getFinalizada = () => this.finalizada

    public finalizar = () => {
        this.finalizada = true
    }

    private _validarTitulo = (titulo:string) => {
        if(titulo.length < 3){
            throw new Error("Título muito curto")
        }
    }

    private _validarDescricao = (descricao:string) => {
        if(descricao.length < 3){
            throw new Error("Descrição muito curta")
        }
    }

    private _validate = () => {
        this._validarTitulo(this.titulo)
        this._validarDescricao(this.descricao)
    }
}