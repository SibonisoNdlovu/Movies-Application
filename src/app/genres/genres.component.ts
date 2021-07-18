import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService, PagedMovies, Genre } from '@app/service/themoviedb';
import { pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres$: Observable<Genre[]>;
  movies$: Observable<PagedMovies>;
  selected;

  constructor(
    private service: ThemoviedbService,
    public route: ActivatedRoute
  ) {
    this.genres$ = this.service.getAllGenders().pipe(pluck('genres'));

    this.movies$ = this.route.queryParams.pipe(
      switchMap(
        ({ search, genre }) =>
          search
            ? this.service.searchMovies(search)
            : this.service.getMovesByGenre(genre)
      ),
      pluck('results')
    );
  }
}
