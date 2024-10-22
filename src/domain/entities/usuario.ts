import { randomUUID } from "crypto"

export class Usuario {
    private id: string
    private nome: string

    constructor(nome:string, id?:string){
        this.nome = nome
        this.id = id ?? randomUUID()
        this._validaNome()
        // if(id){
        //     this.id = id
        // }else{
        //     this.id = randomUUID()
        // }   
    }

    public getNome = () => this.nome
    public getId = () => this.id

    private _validaNome = () => {
        if (this.nome.length < 3)
            throw Error("Nome muito curto.")
    }
}