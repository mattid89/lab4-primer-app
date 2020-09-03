import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBarService: SnackBarService, private router: Router) { }

  loginForm = new FormGroup({
    nombre: new FormControl(''),
    clave: new FormControl(''),
  });

  usuario: Usuario = new Usuario('juan89', 'juancho123');


  ngOnInit() {
  }

  onSubmit() {

    // console.log(this.loginForm.value, this.usuario);

    if (!this.loginForm.valid) {
      this.snackBarService.openSnackBar('Complete los campos correctamente', 'Ok');
      return;
    }

    if (this.loginForm.value.nombre != this.usuario.nombre || this.loginForm.value.clave != this.usuario.clave) {
      this.snackBarService.openSnackBar('Las credenciales son incorrectas!', 'Ok');
      return;
    }

    this.router.navigate(['/bienvenido']);

  }


}
