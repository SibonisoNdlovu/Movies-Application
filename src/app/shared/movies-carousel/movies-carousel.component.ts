import { Component, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PagedMovies } from '@app/service/themoviedb';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnDestroy {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  @Input() title: string;
  @Input() source: PagedMovies;
  sliderNumber;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.sliderNumber = this.mobileQuery.matches ? 3 : 6;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
