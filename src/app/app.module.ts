import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';
import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {MatButtonModule, MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CreateFilmComponent,
    FilmDetailsComponent,
    FilmListComponent,
    UpdateFilmComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
