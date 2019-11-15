import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';
import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateFilmComponent,
    FilmDetailsComponent,
    FilmListComponent,
    UpdateFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
