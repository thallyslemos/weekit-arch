export class Periodo {
    private dataInicio: Date
    private dataFim: Date

    constructor(dataInicio: Date, dataFim: Date) {
        this.dataInicio = dataInicio
        this.dataFim = dataFim
    }

    getDataInicio = () => this.dataInicio
    getDataFim = () => this.dataFim
}