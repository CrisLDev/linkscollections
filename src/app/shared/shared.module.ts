import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

// Angular Material Components
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
