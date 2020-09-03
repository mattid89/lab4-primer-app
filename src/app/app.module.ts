import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalculoComponent } from './components/calculo/calculo.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
