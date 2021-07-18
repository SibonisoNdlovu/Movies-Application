import { Component, Input } from '@angular/core';
import { fade, spin } from '@app/shared/animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  pluck
} from 'rxjs/operators';
import { ThemoviedbService } from '@app/service/themoviedb';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fade(), spin()]
})
export class SearchComponent {
  @Input()
  show: boolean;
  searchControl: FormControl;
  keywords$: Observable<string>;

  constructor(private router: Router, private service: ThemoviedbService) {
    this.searchControl = new FormControl('');

    this.keywords$ = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(search => this.service.searchKeywords(search)),
      pluck('results')
    );
  }

  searchChanged(value: string) {
    this.router.navigate(['/genres'], {
      queryParams: { search: value ? value : undefined },
      queryParamsHandling: 'merge'
    });
  }
}
