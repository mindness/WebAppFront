import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film/film-list/film-list.component';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  { path: 'films', component: FilmListComponent },
  { path: 'add', component: CreateFilmComponent },
  { path: 'update/:id', component: UpdateFilmComponent },
  { path: 'details/:id', component: FilmDetailsComponent },
  { path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
