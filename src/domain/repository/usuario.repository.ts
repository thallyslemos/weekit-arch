import { Usuario } from "../entities/usuario"

export interface UsuarioRepository{
    save(usuario: Usuario): Promise<Usuario>
    findByName(nome: string): Promise<Usuario>
}

export const USUARIO_REPOSITORY = "USUARIO_REPOSITORY"