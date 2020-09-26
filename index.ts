//Importamos clase de 'servidor.ts'
import { Servidor } from './servidor'

async function main() {
    const serv = new Servidor();
    await serv.listen();
}

//Invocamos función
main();