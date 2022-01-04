import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TransacaoController from '../controller/CreateTransacaoController';
const transacaoRouter = Router();
const transacaoController = new TransacaoController();

/**
 * @api {post} http://localhost:3333/transacao Realizar transação
 * @apiGroup Transação
 * @apiSuccess {Number} Variaveis.Valor  Valor da transação
 * @apiSuccess {String} Variaveis.id_chave_origem  Nome da Chave pix do Usuário de origem
 * @apiSuccess {string} Variaveis.id_chave_destino Nome da Chave pix do Usuário de destino
 *
 * @apiParamExample {json} Input
 *    {
 *      "valor": 100
 *      "id_chave_origem": "Minha chave pix origem"
 *      "id_chave_origem": "Minha chave pix destino"
 *    }
 *
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Exemplo"
 *      "valor": 1,
 *      "id_chave_origem": "95cf0d42-4f37-48ef-ab14-28d8ab91e40a",
 *	    "id_chave_destino": "95cf0d42-4f37-48ef-ab14-28d8ab91e40a",
 *     	"id": "b9bb81b4-9a40-458e-8d33-03a8a411832a",
 *      "created_at": "2022-01-04T08:18:52.207Z",
 *	    "updated_at": "2022-01-04T08:18:52.207Z"
 *    }
 *
 */

transacaoRouter.post(
  '/',
  // Usando o celebrate para validação dos dados
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number().required(),
      id_chave_origem: Joi.string().required(),
      id_chave_destino: Joi.string().required(),
    },
  }),
  transacaoController.create,
);

export default transacaoRouter;
