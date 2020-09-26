//Importamos express y declaramos que la usaremos como Application
import express from 'express'
import { Application } from 'express'

//clase Servidor
export class Servidor {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.saludar();
        this.setting();
    }

    private saludar(): void {
        console.log("Iniciando el servidor...");
    }

    private setting(): void {
        this.app.set('port', this.port || process.env.PORT || 5000)
    }
    
    //Promise
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log("Servidor en http://localhost:5000");

        //Debemos abrir el navegador en http://localhost:5000/saludo
        this.app.get("/saludo", function (request, response) {
            response.send(" < h1 > Typescript + Node JS < /h1>");
        });

    }

}