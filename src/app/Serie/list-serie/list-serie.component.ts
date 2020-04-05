import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from '../model-serie/serie';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SerieService} from '../service-serie/serie.service';
import {Router} from '@angular/router';
import {FilmServiceBeta} from '../../betaSeries/betaseries.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  series: Observable<Serie[]>;
  public displayedColumns = ['name', 'affiche', 'synopsis', 'saison', 'episode', 'note', 'duree', 'status', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Serie>();

  constructor(private serieService: SerieService,
              private router: Router, private serieFromApi: FilmServiceBeta) {}


  ngOnInit() {
    this.reloadData();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadData() {
    this.series = this.serieService.getSeriesList();
    this.getAllfSerie();
  }
  public getAllfSerie() {
    this.serieService.getSeriesList()
      .subscribe(data => {
        console.log(data),
          this.dataSource.data = data as Serie[];
      });
  }

  deleteSerie(id: number) {
    this.serieService.deleteSerie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateSerie(id: number) {
    this.router.navigate(['update', id]);
  }


}
