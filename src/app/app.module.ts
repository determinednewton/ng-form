import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SamePasswordsDirective } from './same-passwords.directive';
import { Register2Component } from './register2/register2.component';
import { PasswordsComponent } from './passwords/passwords.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SamePasswordsDirective,
    Register2Component,
    PasswordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
