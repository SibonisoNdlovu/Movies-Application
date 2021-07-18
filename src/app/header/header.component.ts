import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { slideRight } from '@app/shared/animations';
import { MatSidenavContainer } from '@angular/material';
import {
  map,
  pluck,
  tap,
  distinctUntilChanged,
  filter,
  switchMap,
  startWith
} from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideRight(-100, 500)]
})
export class headerComponent implements OnDestroy, AfterViewInit {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSearch$: Observable<boolean>;
  scrollTop$: Observable<boolean>;
  fixedHeader$: Observable<boolean>;
  transparentHeader$: Observable<boolean>;

  @ViewChild(MatSidenavContainer)
  sidenavContainer: MatSidenavContainer;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    router: Router,
    route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    const routeData$ = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(_ => route),
      pluck('firstChild', 'data'),
      switchMap(data => data as Observable<any>)
    );
    this.showSearch$ = routeData$.pipe(pluck('showSearch'));
  }

  ngAfterViewInit() {
    this.scrollTop$ = this.sidenavContainer.scrollable.elementScrolled().pipe(
      pluck('target', 'scrollTop'),
      startWith(0),
      map((scrollTop: number) => scrollTop > 100)
    );

    this.transparentHeader$ = combineLatest(
      this.fixedHeader$,
      this.scrollTop$
    ).pipe(
      map(([fixedHeader, scrollTop]) => fixedHeader && !scrollTop),
      distinctUntilChanged(),
      tap(() => this.changeDetectorRef.detectChanges())
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
