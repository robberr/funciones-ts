"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
//Importamos express y declaramos que la usaremos como Application
const express_1 = require("express");
//clase Servidor
class Servidor {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.saludar();
        this.setting();
    }
    saludar() {
        console.log("Iniciando el servidor...");
    }
    setting() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }
    //Promise
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log("Servidor en http://localhost:5000");
            //Debemos abrir el navegador en http://localhost:5000/saludo
            this.app.get("/saludo", function (request, response) {
                response.send(" < h1 > Typescript + Node JS < /h1>");
            });
        });
    }
}
exports.Servidor = Servidor;
//# sourceMappingURL=servidor.js.map
