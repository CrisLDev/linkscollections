import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { MostPopularCollectionsComponent } from './components/most-popular-collections/most-popular-collections.component';
import { SharedModule } from '@app/shared/shared.module';
import { TagsCardComponent } from './components/tags-card/tags-card.component';
import { LastCollectionsComponent } from './components/last-collections/last-collections.component';


@NgModule({
  declarations: [
    HomeComponent,
    MostPopularCollectionsComponent,
    TagsCardComponent,
    LastCollectionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
