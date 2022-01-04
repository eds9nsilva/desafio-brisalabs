"use strict";
//Arquivo principal de rotas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarios_routes_1 = __importDefault(require("@modules/usuario/routes/usuarios.routes"));
var chave_routes_1 = __importDefault(require("@modules/chaves/router/chave.routes"));
var transacao_routes_1 = __importDefault(require("@modules/transacao/router/transacao.routes"));
var routes = express_1.Router();
routes.use('/usuario', usuarios_routes_1.default);
routes.use('/chave', chave_routes_1.default);
routes.use('/transacao', transacao_routes_1.default);
exports.default = routes;
