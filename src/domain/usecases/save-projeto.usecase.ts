import { Inject } from "@nestjs/common";
import { Projeto } from "../entities/projeto";
import { Usuario } from "../entities/usuario";
import { PROJETO_REPOSITORY, ProjetoRepository } from "../repository/projeto.repository";
import { USUARIO_REPOSITORY, UsuarioRepository } from "../repository/usuario.repository";

export class SaveProjetoUseCase {
    constructor(
        @Inject(PROJETO_REPOSITORY) private repository: ProjetoRepository,
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepository
    ) { }

    async execute(nome: string, responsavel: string, dataFim: string) {
        const projeto = await this._buildProjeto(nome, responsavel, dataFim)
        return this.repository.save(projeto)
    }

    private async _findOrCreateUsuario(nome: string): Promise<Usuario> {
        let usuario = await this.usuarioRepository.findByName(nome)
        if (!usuario) {
            usuario = new Usuario(nome)
            usuario = await this.usuarioRepository.save(usuario)
        }
        return usuario
    }

    private async _buildProjeto(nome: string, responsavel: string, dataFim: string): Promise<Projeto> {
        const usuario = await this._findOrCreateUsuario(responsavel)
        const data = new Date(dataFim)
        return new Projeto({ nome, dataFim: data, responsavel: usuario })
    }
}