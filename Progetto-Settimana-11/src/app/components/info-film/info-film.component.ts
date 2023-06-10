import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { AppService } from 'src/app/services/app.service';
import { Favorites } from 'src/app/models/favorites.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Howl } from 'howler';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.scss']
})
export class InfoFilmComponent implements OnInit {
  movie:any;
movieID!:number;

  constructor(private moviesSrv: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
//VISUALIZZO INFO FILM
    this.route.params.subscribe(params => {
      this.movieID = params['id'];
      this.moviesSrv.getFilmById(this.movieID).subscribe(movie => {
        this.movie = movie
    });
  })


  }

}
