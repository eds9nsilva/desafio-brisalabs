import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Chaves from '../typeorm/entities/Chave';
import ChavesRepository from '../typeorm/repositories/ChavesRepositoritory';
import UsuarioRepository from '../../usuario/typeorm/repositories/UsuariosRepository';

interface IRequest {
  chave: string;
  id_usuario: string;
}

class CreateChaveService {
  public async execute({ chave, id_usuario }: IRequest): Promise<Chaves> {
    const chaveRepositorio = getCustomRepository(ChavesRepository);
    const usuarioRepositorio = getCustomRepository(UsuarioRepository);

    const usuarioExist = await usuarioRepositorio.findById(id_usuario);
    if (!usuarioExist) {
      throw new AppError('Usuário não cadastrado.');
    }
    //Verificando se o usuario tem ja tem as 3 chaves
    const limiteChave = await chaveRepositorio.find({
      where: [
        {
          id_usuario: id_usuario,
        },
      ],
    });

    if (limiteChave.length >= 3) {
      throw new AppError('O usuário já atingiu o limite de chaves cadastradas');
    }
    // Verificando se a chave já existe
    const chaveExiste = await chaveRepositorio.findByName(chave);
    if (chaveExiste) {
      throw new AppError('Chave já cadastrada');
    }

    const chaveParaSalvar = chaveRepositorio.create({
      chave,
      id_usuario,
    });

    await chaveRepositorio.save(chaveParaSalvar);

    return chaveParaSalvar;
  }
}

export default CreateChaveService;
