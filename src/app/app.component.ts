import { Component } from '@angular/core';

import { Tabla } from './juego/tabla'
import { Celda } from './juego/celda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'buscaminassa';
  tabla: Tabla

  constructor() {
    this.reiniciar();
  }

  // manejarFinJuego(result: 'finjuego' | null){

  // }

  verificarCelda(celda: Celda){
    
    const result = this.tabla.verificarCelda(celda);
    console.log('resultado obtenido', result);
    
    if (result === 'finjuego') {
      
      alert('Perdiste!');

    } else if (result === 'gana'){
      
      alert('Ganaste!');

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

}
