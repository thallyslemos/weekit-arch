import { randomUUID } from "crypto"
import { Usuario } from "src/domain/entities/usuario"

describe("Entidade de Usuário", ()=>{
    test("Deve ser possível criar uma entidade de usuário ", ()=>{

        const novoUsuario = new Usuario("Usuário 1")

        expect(novoUsuario.getNome()).toBe("Usuário 1")
    })

    test("Deve lançar um erro se o nome do usuário tiver menos que 3 caracteres", () => {
        expect(() => {
            new Usuario("Oi")
        }).toThrow()
    })
})
