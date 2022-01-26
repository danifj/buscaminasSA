import { Component } from '@angular/core';
import { Tabla } from './juego/tabla'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buscaminassa';
  tabla = new Tabla(10, 5);
}
