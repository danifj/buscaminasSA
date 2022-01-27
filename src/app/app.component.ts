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

  constructor(public dialog: MatDialog) {
    this.reiniciar();
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
  }

  public openDialog(estado: string): void {
    const updateDialogRef = this.dialog.open(ResultadoComponent, {
      data: {
        estadoJuego: estado,
      },
    });
  }


}