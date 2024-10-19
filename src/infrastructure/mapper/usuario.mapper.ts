import { Usuario } from "src/domain/entities/usuario"
import { UsuarioPrisma } from "../entities/usuario.prisma.entity"

export class UsuarioMapper{
    static toDomain(usuario: UsuarioPrisma): Usuario{
        return new Usuario(usuario.nome, usuario.id)
    }

    static toPersistence(usuario: Usuario): UsuarioPrisma{
        return {
            id: usuario.getId(),
            nome: usuario.getNome()
        }
    }
}