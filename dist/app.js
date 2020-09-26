"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const morgan_1 = require("morgan");
//import path from 'path';
//import { indexRoutes } from "./src";
const funciones_1 = require("./src/funciones");
class Applicaction {
    constructor() {
        this.app = express_1.default();
        //  this.settings();
        this.middlewares();
        this.routes();
    }
    /*   settings() {
           this.app.set('port', 4000);
           this.app.set('views', path.join(__dirname, 'views'));
           this.app.engine('.pug', ({
               layoutsDir: path.join(this.app.get('views'), 'layouts'),
               partialsDir: path.join(this.app.get('views'), 'partials'),
               defaultLayout: 'main',
               extname: '.pug'
           }));
           this.app.set('view engine', '.pug');
       }/*/
    middlewares() {
        this.app.use(morgan_1.default('dev'));
    }
    routes() {
        // this.app.use('/', indexRoutes);
        this.app.use('/tasks', funciones_1.default);
        // this.app.use(express.static(path.join(__dirname, 'public')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }

}
exports.default = Applicaction;
//# sourceMappingURL=app.js.map