import { EntityRepository, Repository } from 'typeorm';
import Chaves from '../entities/Chave';

@EntityRepository(Chaves)
class ChavesRepository extends Repository<Chaves> {
  public async findById(id: string): Promise<Chaves | undefined> {
    const chave = await this.findOne({
      where: {
        id,
      },
    });

    return chave;
  }

  public async findByName(chave: string): Promise<Chaves | undefined> {
    const chaveReturn = await this.findOne({
      where: {
        chave,
      },
    });

    return chaveReturn;
  }
}

export default ChavesRepository;
