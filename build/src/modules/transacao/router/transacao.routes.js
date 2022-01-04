"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var CreateTransacaoController_1 = __importDefault(require("../controller/CreateTransacaoController"));
var transacaoRouter = express_1.Router();
var transacaoController = new CreateTransacaoController_1.default();
transacaoRouter.post('/', 
// Usando o celebrate para validação dos dados
celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        valor: celebrate_1.Joi.number().required(),
        id_chave_origem: celebrate_1.Joi.string().required(),
        id_chave_destino: celebrate_1.Joi.string().required(),
    },
    _a)), transacaoController.create);
exports.default = transacaoRouter;
