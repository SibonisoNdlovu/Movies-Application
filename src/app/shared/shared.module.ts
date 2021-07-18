import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { MoviesCarouselComponent } from '@app/shared/movies-carousel/movies-carousel.component';
import { RouterModule } from '@angular/router';
import { ImagePipe } from './themoviedb/image.pipe';
import { BackgroundimagePipe } from './themoviedb/backgroundimage.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    NgxY2PlayerModule,
    RouterModule
  ],
  declarations: [
    MoviesCarouselComponent,
    ImagePipe,
    BackgroundimagePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    NgxY2PlayerModule,
    MoviesCarouselComponent,
    RouterModule,
    ImagePipe,
    BackgroundimagePipe
  ]
})
export class SharedModule { }
