"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
require("@shared/typeorm");
var celebrate_1 = require("celebrate");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(celebrate_1.errors());
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.listen(3333, function () {
    console.log('Server started on port 3333! 🏆');
});
