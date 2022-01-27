import { Component} from '@angular/core';

import { Tabla } from './juego/tabla'
import { Celda } from './juego/celda';

import {MatDialog} from '@angular/material/dialog';
import { ResultadoComponent } from './dialogos/resultado/resultado.component';

export interface DialogData {
  estadoJuego: 'ganaste' | 'perdiste';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'buscaminassa';
  tabla: Tabla
  displayedColumns: string[] = [''];
  time: number = 0;
  interval;

  constructor(public dialog: MatDialog) {
    this.reiniciar();
    this.startTimer();
  }

  // manejarFinJuego(result: 'finjuego' | null){

  // }

  verificarCelda(celda: Celda){
    
    const result = this.tabla.verificarCelda(celda);
    console.log('resultado obtenido', result);
    
    if (result === 'finjuego') {
      
      // alert('Perdiste!');
      this.openDialog('perdiste');

    } else if (result === 'gana'){
      
      // alert('Ganaste!');
      this.openDialog('ganaste');

    }

  }

  bandera(celda: Celda){
    
    if(celda.estado === 'bandera'){
    
      celda.estado = 'abierto';

    } else {
      
      celda.estado = 'bandera';

    }

  }

  reiniciar(){
    this.tabla = new Tabla(10, 10);
    this.startTimer();
  }

  public openDialog(estado: string): void {

    this.pauseTimer();
    const updateDialogRef = this.dialog.open(ResultadoComponent, {
      data: {
        estadoJuego: estado,
      },
    });
    
  }

  transform(value: number, args?: any): string {

    const hours: number = Math.floor(value / 60);
    const minutes: number = (value - hours * 60);

    if (hours < 10 && minutes < 10) {
        return '0' + hours + ' : 0' + (value - hours * 60);
    }
    if (hours > 10 && minutes >= 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
    if (hours > 10 && minutes < 10) {
        return hours + ' : 0' + (value - hours * 60);
    }
    if (minutes >= 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
  }

  startTimer() {
    this.time = 0;
    clearInterval(this.interval);
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
    }, 1000);
  }

  pauseTimer() {
    this.time = this.time;
    clearInterval(this.interval);
  }

}