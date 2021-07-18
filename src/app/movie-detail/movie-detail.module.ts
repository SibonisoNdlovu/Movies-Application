import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule
  ],
  declarations: [MovieDetailComponent]
})
export class MovieDetailModule { }
