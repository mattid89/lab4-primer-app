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
  paisesBorrados: Pais[] = [];
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

  eliminar(pais: Pais) {
    let pos = this.paises.indexOf(pais);
    let elementoEliminado = this.paises.splice(pos, 1)
    this.paisesBorrados.push(elementoEliminado[0]);
  }

}
