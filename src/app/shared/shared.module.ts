import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }