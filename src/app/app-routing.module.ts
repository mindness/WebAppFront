import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film/film-list/film-list.component';
import { ListSerieComponent } from './Serie/list-serie/list-serie.component';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
import { LoginComponent } from './login/login.component';
import {CreateSerieComponent} from './Serie/create-serie/create-serie.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  { path: 'films', component: FilmListComponent },
  { path: 'serie', component: ListSerieComponent },
  { path: 'addFilm', component: CreateFilmComponent },
  { path: 'addSerie', component: CreateSerieComponent },
  { path: 'update/:id', component: UpdateFilmComponent },
  { path: 'details/:id', component: FilmDetailsComponent },
  { path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
