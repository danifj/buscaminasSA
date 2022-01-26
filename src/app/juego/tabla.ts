import { Celda } from './celda';

export class Tabla {

    celdas: Celda[][] = [];
    constructor(tamanio: number, minas: number) {

        for (let y = 0; y < tamanio; y++) {

            this.celdas[y] = [];
            for (let x = 0; x < tamanio; x++) {

                this.celdas[y][x] = new Celda(y, x);

            }

        }

        //Asignar minas
        for (let i = 0; i < minas; i++) {
            this.generarCeldaAleatoria().mina = true;
        }
    }

    generarCeldaAleatoria(): Celda {
        
        const y = Math.floor(Math.random() * this.celdas.length);
        const x = Math.floor(Math.random() * this.celdas[y].length);
        return this.celdas[y][x];

    }

    verificarCelda(celda: Celda){
        if(celda.estado !== "abierto") {
            return;
        } else if (celda.mina) {
            this.finJuego()
        } else {

        
            celda.estado = celda.mina ?
        }
    }

}