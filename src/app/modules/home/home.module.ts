import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
// Katex module for latex equations
import { KatexModule } from 'ng-katex';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    KatexModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
