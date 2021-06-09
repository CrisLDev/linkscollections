import { NgModule } from '@angular/core';
import { SwipperModule } from './swipper/swipper.module';


@NgModule({
  imports: [
    SwipperModule
  ],
  exports: [SwipperModule]
})
export class SharedModule { }
