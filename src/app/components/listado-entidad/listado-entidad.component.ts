import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() paises: Pais[];
  @Input() titulo: String;
  @Input() siNoBorra: boolean;
  @Output() seleccion = new EventEmitter<Pais>();
  @Output() eliminacion = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(pais: Pais) {
    this.seleccion.emit(pais);
  }

  eliminar(pais: Pais) {
    this.eliminacion.emit(pais);
  }

}
