
import { Observable } from 'rxjs';
import { FilmService } from '../service-film/film.service';
import { Film } from '../model-film/film';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit{
  films: Observable<Film[]>;

  constructor(private filmService: FilmService,
              private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.films = this.filmService.getFilmsList();
  }

  deleteFilm(id: number) {
    this.filmService.deleteFilm(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  filmDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateFilm(id: number){
    this.router.navigate(['update', id]);
  }

}
