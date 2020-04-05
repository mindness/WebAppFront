import { Component, OnInit } from '@angular/core';
import {Serie} from '../model-serie/serie';
import {ActivatedRoute, Router} from '@angular/router';
import {SerieService} from '../service-serie/serie.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-update-serie',
  templateUrl: './update-serie.component.html',
  styleUrls: ['./update-serie.component.css']
})
export class UpdateSerieComponent implements OnInit {
  id: number;
  serie: Serie;

  constructor(private route: ActivatedRoute, private router: Router,
              private serieService: SerieService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.serie = new Serie();
    this.id = this.route.snapshot.params.id;
    this.serieService.getSerie(this.id)
      .subscribe(data => {
        console.log(data);
        this.serie = data;
      }, error => console.log(error));
  }

  updateSerie() {
    this.serieService.updateSerie(this.id, this.serie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.serie = new Serie();
    this.gotoList();
  }

  onSubmit() {
    this.updateSerie();
  }

  gotoList() {
    this.router.navigate(['series']);

  }
}

