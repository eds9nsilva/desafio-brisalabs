import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuario';
import UsuariosRepository from '../typeorm/repositories/UsuariosRepository';

interface IRequest {
  nome: string;
  telefone: string;
}

class CreateUsuarioService {
  public async execute({ nome, telefone }: IRequest): Promise<Usuario> {
    const usuarioRepositorio = getCustomRepository(UsuariosRepository);

    const usuario = usuarioRepositorio.create({
      nome,
      telefone,
    });

    await usuarioRepositorio.save(usuario);

    return usuario;
  }
}

export default CreateUsuarioService;
