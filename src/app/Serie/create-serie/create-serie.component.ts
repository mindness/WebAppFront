import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Serie} from '../model-serie/serie';
import {SerieService} from '../service-serie/serie.service';
import {FilmServiceBeta} from '../../betaSeries/betaseries.service';


interface SeasonDetails {
  saison: string;
  episode: string;
}

@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {
  serie: Serie = new Serie();
  submitted = false;
  show = false;
  form: any;
  selectedValue: number;
  selectedValueEp: number;
  seasonDetail: (SeasonDetails)[] = [];
  episode = [];
  id = -1;

  constructor(private serieService: SerieService,
              private router: Router, private serieFromApi: FilmServiceBeta) {
  }

  ngOnInit() {

  }

  newSerie(): void {
    this.submitted = false;
    this.serie = new Serie();
  }

  save() {
    this.serie.saison = this.selectedValue;
    this.serie.episode = this.selectedValueEp;
    this.serieService.createSerie(this.serie)
      .subscribe(data => {
          console.log(data);
          this.serie = new Serie();
          this.gotoList();
        },
        error => {
          console.log(error);
          this.submitted = true;
          });
  }

  onSubmit() {
   // this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['serie']);

  }

  toggle() {
    this.show = !this.show;
  }

  showValueSerie(serie: string) {
    this.serieFromApi.getInfobyName('shows/search', serie)
      .subscribe(data => {
        console.log(data);
        this.serie.name = data.shows[0].title;
        this.serie.note = data.shows[0].notes.mean.toFixed(2);
        this.serie.synopsis = data.shows[0].description;
        console.log('all data');
        console.log(data.shows[0].seasons_details);
        this.serie.status = data.shows[0].status;
        this.serie.duree = data.shows[0].length;
        this.id = data.shows[0].id;

        for (let i = 0; i < data.shows[0].seasons_details.length; i++) {
          this.seasonDetail.push({saison: data.shows[0].seasons_details[i].number, episode: data.shows[0].seasons_details[i].episodes});
        }
        console.log('saison detail');
     //   console.log(this.seasonDetail);
      });

  }

  episodeLoaderWithSeason() {
    this.episode = []
    let selectedSeason = this.selectedValue - 1; // -1 car les table commence a 0 et après ça casse tout
    console.log('calling' + this.seasonDetail[selectedSeason].saison  + this.seasonDetail[selectedSeason].episode );
    console.log(this.seasonDetail);
    for ( let i = 0; i < parseInt( this.seasonDetail[selectedSeason].episode, 10); i ++) {
      this.episode.push(i + 1);
    }

    this.serieFromApi.getInfobyID('shows/seasons', this.id)
      .subscribe(data => {
        this.serie.affiche = data.seasons[selectedSeason.toString()].image;
      });


  }
}
