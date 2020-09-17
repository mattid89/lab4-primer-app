import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() paises: Pais[];
  @Output() seleccion = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(pais: Pais) {
    this.seleccion.emit(pais);
  }

}
