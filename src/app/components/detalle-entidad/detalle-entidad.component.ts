import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() pais: Pais;

  constructor() { }

  ngOnInit() {
  }

}
