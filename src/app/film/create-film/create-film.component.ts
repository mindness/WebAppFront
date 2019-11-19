import { FilmService } from '../service-film/film.service';
import { Film } from '../model-film/film';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  film: Film = new Film();
  submitted = false;

  constructor(private filmService: FilmService,
              private router: Router) { }

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
}
