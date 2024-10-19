import { randomUUID } from "crypto"

export class Usuario {
    private id: string
    private nome: string

    constructor(nome:string, id?:string){
        this.nome = nome
        this.id = id ?? randomUUID()
        // if(id){
        //     this.id = id
        // }else{
        //     this.id = randomUUID()
        // }   
    }

    getNome = () => this.nome
    getId = () => this.id

}