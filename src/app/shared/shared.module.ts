import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


// material 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    RouterModule,
    CardComponent,

    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
