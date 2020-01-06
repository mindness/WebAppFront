import { FilmService } from '../service-film/film.service';
import { Film } from '../model-film/film';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FilmServiceBeta} from '../betaSeries/betaseries.service';
import {DatePipe} from '@angular/common';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css'],
  providers: [DatePipe]
})
export class CreateFilmComponent implements OnInit {

  film: Film = new Film();
  submitted = false;
  show = false;
  form: any;

  constructor(private filmService: FilmService,
              private router: Router, private filmFromApi: FilmServiceBeta, private datePipe: DatePipe) { }

  ngOnInit() {
  }

  newFilm(): void {
    this.submitted = false;
    this.film = new Film();
  }

  save() {
    this.filmService.createFilm(this.film)
      .subscribe(data => {
        console.log(data);
      },
        error => console.log(error));
    this.film = new Film();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['films']);

  }

  toggle() {
    this.show = !this.show;
  }

  showValueMovie(movie: string) {
    console.log(movie);
    this.filmFromApi.getInfo('movies/search', movie)
      .subscribe(data => {
        this.film.name =  data.movies[0].title;
        this.film.affiche =  data.movies[0].poster;
        this.film.dateSortie =  data.movies[0].release_date;
        this.film.note =  data.movies[0].notes.mean.toFixed(2);
        this.film.synopsis =  data.movies[0].synopsis;
      });

  }
}
