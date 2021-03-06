
import { Observable } from 'rxjs';
import { FilmService } from '../service-film/film.service';
import { Film } from '../model-film/film';
import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {FilmServiceBeta} from '../../betaSeries/betaseries.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  films: Observable<Film[]>;
  public displayedColumns = ['name', 'affiche', 'synopsis', 'dateSortie', 'note', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Film>();

  constructor(private filmService: FilmService,
              private router: Router, private filmFromApi: FilmServiceBeta) {}


  ngOnInit() {
    this.reloadData();
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadData() {
    this.films = this.filmService.getFilmsList();
    this.getAllfFilm();
  }
  public getAllfFilm() {
    this.filmService.getFilmsList()
      .subscribe(data => {
        console.log(data),
        this.dataSource.data = data as Film[];
      });
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

  filmDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  updateFilm(id: number) {
    this.router.navigate(['update', id]);
  }


}
