import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  exports:[
    AuthModalComponent
  ]
})
export class UserModule { }
