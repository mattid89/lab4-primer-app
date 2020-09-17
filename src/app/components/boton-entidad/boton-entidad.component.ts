import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() pais: Pais;
  @Output() borro = new EventEmitter<Pais>();
  
  constructor() { }

  ngOnInit() {
  }

  borrar() {
    this.borro.emit(this.pais);
  }

}
