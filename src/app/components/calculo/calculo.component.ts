import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  promedio: number = 0;
  suma: number = 0;

  edades = new FormGroup({
    edadUno: new FormControl(''),
    edadDos: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  calcular() {
    const edadUno = this.edades.value.edadUno;
    const edadDos = this.edades.value.edadDos;
    console.log(edadUno, edadDos);
    this.promedio = this.calcularPromedio([edadUno, edadDos]);
    this.suma = this.calcularSuma([edadUno, edadDos]);
  }

  calcularPromedio(nums: number[]) {
      return nums.reduce((a, b) => (a + b)) / nums.length;
  }

  calcularSuma(nums: number[]) {
    return nums.reduce((a, b) => (a + b));
}



}
