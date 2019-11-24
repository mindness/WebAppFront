import { Film } from '../model-film/film';
import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../service-film/film.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  id: number;
  film: Film;

  constructor(private route: ActivatedRoute, private router: Router,
              private filmService: FilmService) { }

  ngOnInit() {
    this.film = new Film();

    this.id = this.route.snapshot.params['id'];

    this.filmService.getFilm(this.id)
      .subscribe(data => {
        console.log(data)
        this.film = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['films']);
  }
}
