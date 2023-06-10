import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies.interface';
import { Favorites } from '../models/favorites.interface';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  // CHIAMATA GET FILMS
  getMovies() {
    return this.http.get<Movies[]>('http://localhost:4201/movies-popular');
  }
  //CHIAMATA GET FAVORITI
  getFavorites() {
    return this.http.get<Favorites[]>('http://localhost:4201/favorites');
  }

  //CHIAMATA POST PER METTERE FILM NEI PREFERITI
  aggiungiFavorites(data: Favorites) {
    return this.http.post<Favorites>('http://localhost:4201/favorites', data);
  }
  // CHIAMATA DELETE PER ELEMINARE FILM DAI PREFERITI
  eliminaFavorites(favoriteID: number) {
    return this.http.delete(`http://localhost:4201/favorites/${favoriteID}`);
  }
}
