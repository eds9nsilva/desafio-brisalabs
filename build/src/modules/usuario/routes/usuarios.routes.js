"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var UsuariosController_1 = __importDefault(require("../controllers/UsuariosController"));
var usuarioRouter = express_1.Router();
var usuarioController = new UsuariosController_1.default();
usuarioRouter.post('/', 
// Usando o celebrate para validação dos dados
celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        nome: celebrate_1.Joi.string().required(),
        telefone: celebrate_1.Joi.string().required(),
    },
    _a)), usuarioController.create);
exports.default = usuarioRouter;
