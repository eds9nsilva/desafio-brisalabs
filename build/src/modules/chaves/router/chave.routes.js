"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var CriarChaveController_1 = __importDefault(require("../controller/CriarChaveController"));
var chaveRouter = express_1.Router();
var chaveController = new CriarChaveController_1.default();
chaveRouter.post('/:id_usuario', 
// Usando o celebrate para validação dos dados
celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        chave: celebrate_1.Joi.string().required(),
    },
    _a[celebrate_1.Segments.PARAMS] = {
        id_usuario: celebrate_1.Joi.string().uuid().required(),
    },
    _a)), chaveController.create);
exports.default = chaveRouter;
