import { Request, Response } from 'express';
import CreateTransacaoService from '../services/CreateTransacaoService';

class TransacaoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { valor, id_chave_origem, id_chave_destino } = request.body;
    const criarUsuario = new CreateTransacaoService();

    const transacaoReturn = await criarUsuario.execute({
      valor,
      id_chave_origem,
      id_chave_destino,
    });

    return response.json(transacaoReturn);
  }
}

export default TransacaoController;
