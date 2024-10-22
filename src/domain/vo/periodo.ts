export class Periodo {
    private dataInicio: Date
    private dataFim: Date

    constructor(dataInicio: Date, dataFim: Date) {
        this.dataInicio = dataInicio
        this.dataFim = dataFim
        this._validate()
    }

    public getDataInicio = () => this.dataInicio
    public getDataFim = () => this.dataFim

    private _validate = () => {
        if(this.dataFim < this.dataInicio)
            throw Error("A data final não pode ser anterior a data de inicio.")
    }
}