export class Celda {
    estado: 'abierto' | 'limpio' | 'bandera' = 'abierto';
    mina = false;
    proximindadMinas = 0;

    constructor(public fila: number, public columna: number) {

    }
}