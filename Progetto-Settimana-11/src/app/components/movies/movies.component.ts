import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { AppService } from 'src/app/services/app.service';
import { Favorites } from 'src/app/models/favorites.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Howl } from 'howler';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] | undefined;
  favorites: Favorites[] | undefined;
  favorite!: Favorites;
  netflixSpinner: boolean = true;

  //audio all avvio di netflix
   sound = new Howl({
    src: ['assets/audio/audio.mp3']
  });

  constructor(private moviesSrv: AppService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.sound.play();
    setTimeout(() => {
      this.netflixSpinner=false;

    },4000);




     //CHIAMATA GET PER I FILMS
    this.moviesSrv.getMovies().subscribe((movies: Movies[]) => {

      this.movies = movies;
    });



  // CHIAMATA GET PER I FAVORITES
    this.moviesSrv.getFavorites().subscribe((favorites: Favorites[]) => {

      this.favorites = favorites;
      console.log('Film preferiti dagli utenti:',this.favorites);
    });
  }

  // METODO CON IF ELSE PER AGGIUNGERE O TOGLIERE UN FILM DAI PREFERITI  CON POST E DELETE
  gestisciPreferito(movieID: number) {
    const userId = this.authSrv.getCurrentUserId();
    const isFavorito = this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );

    if (isFavorito) {
      // RIMUOVO DAI PREFERITI
      this.moviesSrv.eliminaFavorites(isFavorito.id).subscribe(() => {
        console.log('Film preferito rimosso con successo');
        console.log('Film preferiti dagli utent:',this.favorites);
        const favoriteIndex = this.favorites!.indexOf(isFavorito);
        if (favoriteIndex !== -1) {
          this.favorites!.splice(favoriteIndex, 1);
        }
      });
    } else {
      // AGGIUNGO AI PREFERITI
      const newFavorite: Favorites = {
        userId: userId!,
        movieId: movieID,
        id: 0,
      };
      this.moviesSrv
        .aggiungiFavorites(newFavorite)
        .subscribe((favorite: Favorites) => {
          this.favorites!.push(favorite);
          console.log('Film preferito aggiunto con successo:', favorite);
          console.log('Film preferiti dagli utenti:',this.favorites);
        });
    }
  }
  // METODO PER VERIFICARE SE IL FILM E' NEI PREFERITI
  isPreferito(movieID: number): boolean {
    const userId = this.authSrv.getCurrentUserId();
    return !!this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );
  }
}
