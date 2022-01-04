import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../entities/Usuario';

@EntityRepository(Usuario)
class UsuariosRepository extends Repository<Usuario> {
  public async findById(id: string): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: {
        id,
      },
    });

    return usuario;
  }
}

export default UsuariosRepository;
