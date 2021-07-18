import { MovieDetailModule } from './movie-detail.module';

describe('MovieDetailModule', () => {
  let movieDetailModule: MovieDetailModule;

  beforeEach(() => {
    movieDetailModule = new MovieDetailModule();
  });

  it('should create an instance', () => {
    expect(movieDetailModule).toBeTruthy();
  });
});
