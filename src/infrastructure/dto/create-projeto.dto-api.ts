import { IsNotEmpty, IsString } from "class-validator"

export class CreateProjetoDtoApi {
    @IsNotEmpty()
    @IsString()
    nome: string

    @IsNotEmpty()
    @IsString()
    responsavel: string

    dataFim: string
}
