import { Tarefa } from "src/domain/entities/tarefa"

describe("Entidade de Tarefa", ()=>{
    test("Deve ser possível criar uma entidade de tarefa ", ()=>{

        const novaTarefa = new Tarefa("Tarefa 1", "Descrição da tarefa 1")

        expect(novaTarefa.getTitulo()).toBe("Tarefa 1")
        expect(novaTarefa.getDescricao()).toBe("Descrição da tarefa 1")
        expect(novaTarefa.getId()).not.toBeNull()
        expect(novaTarefa.getId()).toBeDefined()
    })

    test("Deve lançar um erro se título for muito curto", ()=>{
        expect(()=>{
            new Tarefa("xx", "Descrição da tarefa 1")
        }).toThrow()
    })

    test("Deve lançar um erro se descrição for muito curta", ()=>{
        expect(()=>{
            new Tarefa("Tarefa 1", "xx")
        }).toThrow()
    })

    test("Deve ser possivel finalizar uma tarefa", ()=>{
        const novaTarefa = new Tarefa("Tarefa 1", "Descrição da tarefa 1")
        novaTarefa.finalizar()
        expect(novaTarefa.getFinalizada()).toBe(true)
    })
})