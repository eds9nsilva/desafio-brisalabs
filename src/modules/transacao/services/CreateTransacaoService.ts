import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transacao from '../typeorm/entities/Transacao';
import TransacaoRepository from '../typeorm/repositories/TransacaoRepository';
import ChavesRepository from '../../chaves/typeorm/repositories/ChavesRepositoritory';

//Declarando id_chave_origem e id_chave_destino para manter o padrão da entidade
interface IRequest {
  valor: number;
  id_chave_origem: string;
  id_chave_destino: string;
}

class CreateTransacaoService {
  public async execute({
    valor,
    id_chave_origem,
    id_chave_destino,
  }: IRequest): Promise<Transacao> {
    const transacaoRepositorio = getCustomRepository(TransacaoRepository);
    const chaveRepositorio = getCustomRepository(ChavesRepository);

    //Recebendo o nome da chave para verficação se existe
    const chave_origem = id_chave_origem;
    const chave_destino = id_chave_destino;

    //Pesquisando se a chave de origem existem no banco
    const chaveOrigemExistem = await chaveRepositorio.findByName(chave_origem);
    if (!chaveOrigemExistem) {
      throw new AppError('Chave de origem não cadastrada');
    }
    id_chave_origem = chaveOrigemExistem.id;

    //Pesquisando se a chave de destino existem no banco
    const chaveDestinoExistem = await chaveRepositorio.findByName(
      chave_destino,
    );
    if (!chaveDestinoExistem) {
      throw new AppError('Chave de destino não cadastrada');
    }
    id_chave_destino = chaveDestinoExistem.id;

    const transacao = transacaoRepositorio.create({
      valor: valor,
      id_chave_origem,
      id_chave_destino,
    });

    await transacaoRepositorio.save(transacao);

    return transacao;
  }
}

export default CreateTransacaoService;
