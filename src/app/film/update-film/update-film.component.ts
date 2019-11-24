import { Component, OnInit } from '@angular/core';
import { Film } from '../model-film/film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service-film/film.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css'],
  providers:[DatePipe]

})
export class UpdateFilmComponent implements OnInit {
  id: number;
  film: Film;

  constructor(private route: ActivatedRoute, private router: Router,
              private filmService: FilmService, private datePipe: DatePipe ) { }


  ngOnInit() {

    this.film = new Film();
    this.id = this.route.snapshot.params.id;
    this.filmService.getFilm(this.id)
      .subscribe(data => {
        console.log( data);
        const res = data.dateSortie.split('/');
        this.film = data;
        this.film.dateSortie = new Date(res[2], res[1] - 1, res[0]);

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
