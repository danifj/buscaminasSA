import { sanitizeIdentifier } from '@angular/compiler';
import { Celda } from './celda';

const PARES = [[-1,-1], [-1, 0], [-1, 1], [ 0,-1], [ 0, 1], [ 1,-1], [ 1, 0], [ 1, 1]];

export class Tabla {

    celdas: Celda[][] = [];

    private celdasRestantes = 0;
    private cantidadMinas = 0;

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

        //Contar minas
        for(let y = 0; y < tamanio; y++){
            
            for(let x= 0; x < tamanio; x++){
                
                let minasAdyacentes = 0;
                for(const par of PARES){
                    
                    if (this.celdas[y+par[0]] && this.celdas[y+par[0]][x+par[1]] && this.celdas[y+par[0]][x+par[1]].mina){
                        minasAdyacentes++;
                    }

                }
                this.celdas[y][x].minasProximidad = minasAdyacentes;
                
                if(this.celdas[y][x].mina){
                    this.cantidadMinas ++;
                }
            }

        }
        this.celdasRestantes = (tamanio * tamanio) - this.cantidadMinas;
    }

    generarCeldaAleatoria(): Celda {
        
        const y = Math.floor(Math.random() * this.celdas.length);
        const x = Math.floor(Math.random() * this.celdas[y].length);
        return this.celdas[y][x];

    }

    verificarCelda(celda: Celda): 'finjuego' | 'gana' | null {

        console.log('Controlando celda', celda);
        if(celda.estado !== "abierto") {
            
            return;

        } else if (celda.mina) {
            
            this.mostrarTodo();
            return 'finjuego';

        } else {
            
            celda.estado = 'limpio';
            //Mostrar cuadrados vecinos al clikear 1 sin minas cercanas
            if (celda.minasProximidad === 0) {
                
                for(const par of PARES){
                
                    if (this.celdas[celda.fila + par[0]] && this.celdas[celda.fila + par[0]][celda.columna + par[1]]){

                        this.verificarCelda(this.celdas[celda.fila + par[0]][celda.columna + par[1]]);
                        
                    }

                }

            }
            if(this.celdasRestantes-- <= 1) {
            
                return 'gana';

            }
            return;
        }
    }

    mostrarTodo() {
        
        for(const fila of this.celdas){
            
            for(const celda of fila){

                if(celda.estado === 'abierto'){
                    celda.estado = 'limpio';
                }
            
            }

        }
    }

    // finJuego(){

    // }

}