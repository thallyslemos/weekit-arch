import { Usuario } from "@prisma/client";

export class UsuarioPrisma implements Usuario {
    id: string;
    nome: string;
}