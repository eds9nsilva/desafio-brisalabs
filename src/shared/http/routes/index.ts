//Arquivo principal de rotas

import { Router } from 'express';
import usuarioRouter from '@modules/usuario/routes/usuarios.routes';
import chaveRouter from '@modules/chaves/router/chave.routes';
import transacaoRouter from '@modules/transacao/router/transacao.routes';

const routes = Router();

routes.use('/usuario', usuarioRouter);
routes.use('/chave', chaveRouter);
routes.use('/transacao', transacaoRouter);

export default routes;
