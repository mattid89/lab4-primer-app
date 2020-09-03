import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { CalculoComponent } from './components/calculo/calculo.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'calculo', component: CalculoComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
