import { NgModule } from '@angular/core';
import { OwlModule } from './swipper/owl.module';


@NgModule({
  imports: [
    OwlModule
  ],
  exports: [OwlModule]
})
export class SharedModule { }
