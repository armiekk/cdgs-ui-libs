import { NgModule } from '@angular/core';
import {
  ButtonModule,
  BreadcrumbModule,
  DataTableModule,
  InputTextModule,
  InputTextareaModule
} from 'primeng/primeng';


@NgModule({
  exports: [
    ButtonModule,
    BreadcrumbModule,
    DataTableModule,
    InputTextModule,
    InputTextareaModule,
  ],
})
export class CdgsUiLibsModule { }
