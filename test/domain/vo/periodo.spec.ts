import { Periodo } from "src/domain/vo/periodo"

describe("Objeto de Valor Periodo", () => {
    test("Deve ser possível criar um V.O de Periodo", () => {
        const dataInicio = new Date("2022-01-01")
        const dataFim = new Date("2022-02-01")

        const periodo = new Periodo(dataInicio, dataFim)

        expect(periodo.getDataInicio()).toBe(dataInicio)
        expect(periodo.getDataFim()).toBe(dataFim)
    })

    test("Deve lançar um erro se a data de finalização for anterior a data de inicio", () => {
        const dataInicio = new Date("2022-01-02")
        const dataFim = new Date("2022-01-01")

        expect(() => {
            new Periodo(dataInicio, dataFim)
        }
        ).toThrow() 
    })
})