import { EntityRepository, Repository } from 'typeorm';
import Transacao from '../entities/Transacao';

@EntityRepository(Transacao)
class TransacaoRepository extends Repository<Transacao> {
  public async findById(id: string): Promise<Transacao | undefined> {
    const usuario = await this.findOne({
      where: {
        id,
      },
    });

    return usuario;
  }
}

export default TransacaoRepository;
