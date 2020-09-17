import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  constructor(private paisesService: PaisesService) { }

  paises: Pais[];
  pais: Pais;

  ngOnInit() {
    this.paisesService.getPaises()
    .subscribe(
      paises => {
        this.paises = paises;
      },
      error => {
        console.log(error)
      }
    );
  }

  mostrarDetalle(pais: Pais) {
    this.pais = pais;
  }

}
