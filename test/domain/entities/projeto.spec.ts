import { Projeto } from "src/domain/entities/projeto"
import { Usuario } from "src/domain/entities/usuario"

describe("Entidade de Projeto", ()=>{
    test("Deve ser possível criar uma entidade de projeto (Caminho feliz)", ()=>{

        const meuUsuario = new Usuario("Pedro")
        const meuProjeto = new Projeto({
            dataFim: new Date("2025-10-10"),
            responsavel: meuUsuario,
            nome: "Projeto 1"
        })

        expect(meuProjeto.getNome()).toBe("Projeto 1")
        expect(meuProjeto.getResponsavel().getNome()).toBe("Pedro")
        expect(meuProjeto.getId()).not.toBeNull()
        expect(meuProjeto.getId()).toBeDefined()
    })

    test("Deve lançar um erro se nome for muito curto", ()=>{
        const meuUsuario = new Usuario("Pedro")
        expect(()=>{
            new Projeto({
                dataFim: new Date("2025-10-10"),
                responsavel: meuUsuario,
                nome: "xxx"
            })
        }).toThrow()
    })
})