import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() paises: Pais[];

  constructor() { }

  ngOnInit() {
  }

}
