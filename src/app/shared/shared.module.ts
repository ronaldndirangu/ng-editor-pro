import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';


const mainModules = [
  CommonModule
];

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule
];

const components = [
  HeaderComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    ...mainModules,
    ...materialModules
  ],
  exports: [
    ...components,
    ...mainModules,
    ...materialModules
  ]
})
export class SharedModule { }
