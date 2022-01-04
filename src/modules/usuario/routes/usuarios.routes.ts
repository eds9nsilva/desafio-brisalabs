import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsuarioController from '../controllers/UsuariosController';
const usuarioRouter = Router();
const usuarioController = new UsuarioController();
/**
 * @api {post} http://localhost:3333/usuario Cadastrar Usuário
 * @apiGroup Usuário
 * @apiSuccess {String} Variaveis.nome Nome do Usuário
 * @apiSuccess {String} Variaveis.telefone Telefone do usuário
 *
 * @apiParamExample {json} Input
 *    {
 *      "nome": "Nome do Usuário"
 *      "telefone": "Telefone do usuário"
 *    }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Exemplo"
 *      "nome": "Nome do usuário",
 *       "telefone": "000000",
 *       "id": "3400e54e-8cd4-46ca-901f-41f44bec72c6",
 *       "created_at": "2022-01-04T07:58:50.108Z",
 *       "updated_at": "2022-01-04T07:58:50.108Z"
 *    }
 *
 */
usuarioRouter.post(
  '/',
  // Usando o celebrate para validação dos dados
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
    },
  }),
  usuarioController.create,
);

export default usuarioRouter;
