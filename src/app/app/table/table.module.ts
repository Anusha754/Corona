import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    TableComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
