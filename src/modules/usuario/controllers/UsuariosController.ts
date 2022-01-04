import { Request, Response } from 'express';
import CreateUsuarioService from '../services/CreateUsuarioService';

class UsuarioController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, telefone } = request.body;

    const criarUsuario = new CreateUsuarioService();

    const usuario = await criarUsuario.execute({
      nome,
      telefone,
    });

    return response.json(usuario);
  }
}

export default UsuarioController;
