import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ChaveController from '../controller/CriarChaveController';
const chaveRouter = Router();
const chaveController = new ChaveController();

/**
 * @api {post} http://localhost:3333/chave/id_usuario Cadastrar chave pix
 * @apiGroup Chave Pix
 * @apiSuccess {String} Variaveis.chave  Endereço da Chave pix do Usuário
 * @apiSuccess {id} Variaveis.id Id do usuário
 *
 * @apiParamExample {json} Input
 *    {
 *      "chave": "chave pix 123"
 *    }
 *
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Exemplo"
 *      "chave": "chave pix 123",
 *      "id_usuario": "3400e54e-8cd4-46ca-901f-41f44bec72c6",
 *      "id": "95cf0d42-4f37-48ef-ab14-28d8ab91e40a",
 *       "created_at": "2022-01-04T08:02:49.833Z",
 *       "updated_at": "2022-01-04T08:02:49.833Z"
 *    }
 *
 */

chaveRouter.post(
  '/:id_usuario',
  // Usando o celebrate para validação dos dados
  celebrate({
    [Segments.BODY]: {
      chave: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id_usuario: Joi.string().uuid().required(),
    },
  }),
  chaveController.create,
);

export default chaveRouter;
