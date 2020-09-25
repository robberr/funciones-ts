import express from 'express';
import morgan from 'morgan';
import http = require('http');
import path from 'path';
import { indexRoutes } from "./src";
import funcionesr from './src/funciones';

class Applicaction {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 4000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.pug', ({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.pug'
        }));
        this.app.set('view engine', '.pug');
    }
  middlewares() {
    this.app.use(morgan('dev'));
  }
  routes() {
    this.app.use('/', indexRoutes);
    this.app.use('/tasks', funcionesr);

    this.app.use(express.static(path.join(__dirname, 'public')));
  }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}
export default Applicaction;