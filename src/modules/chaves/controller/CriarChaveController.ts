import { Request, Response } from 'express';
import CreateChaveService from '../services/CreateChaveService';

class ChaveController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { chave } = request.body;
    const { id_usuario } = request.params;
    const criarUsuario = new CreateChaveService();

    const chaveParaReturn = await criarUsuario.execute({
      chave,
      id_usuario,
    });

    return response.json(chaveParaReturn);
  }
}

export default ChaveController;
