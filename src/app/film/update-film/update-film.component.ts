import { Component, OnInit } from '@angular/core';
import { Film } from '../model-film/film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service-film/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  id: number;
  film: Film;

  constructor(private route: ActivatedRoute, private router: Router,
              private filmService: FilmService) { }

  ngOnInit() {
    this.film = new Film();

    this.id = this.route.snapshot.params.id;

    this.filmService.getFilm(this.id)
      .subscribe(data => {
        console.log(data);
        this.film = data;
      }, error => console.log(error));
  }

  updateFilm() {
    this.filmService.updateFilm(this.id, this.film)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.film = new Film();
    this.gotoList();
  }

  onSubmit() {
    this.updateFilm();
  }

  gotoList() {
    this.router.navigate(['films']);

  }
}
