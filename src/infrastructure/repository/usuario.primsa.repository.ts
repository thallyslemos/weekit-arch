import { Injectable } from "@nestjs/common";
import { PrismaService } from "../service/prisma.service";
import { Usuario } from "src/domain/entities/usuario";
import { UsuarioMapper } from "../mapper/usuario.mapper";
import { UsuarioRepository } from "src/domain/repository/usuario.repository";

@Injectable()
export class UsuarioPrismaOrmRepository implements UsuarioRepository {
    constructor(
        private db: PrismaService
    ){}

    async save(usuario: Usuario): Promise<Usuario> {
        const {id,nome} = UsuarioMapper.toPersistence(usuario)
        const novoUsuario = await this.db.usuario.create({
            data: {id,nome}
        })
        return UsuarioMapper.toDomain(novoUsuario)
    }

    async findByName(nome: string): Promise<Usuario> {
        const usuario = await this.db.usuario.findFirst({
            where: {nome: nome}
        })

        if(!usuario){
            return null
        }
        return UsuarioMapper.toDomain(usuario)
    }
}