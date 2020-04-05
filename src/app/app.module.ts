import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { CreateFilmComponent } from './film/create-film/create-film.component';
import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
import { CreateSerieComponent} from './Serie/create-serie/create-serie.component';
import { ListSerieComponent } from './Serie/list-serie/list-serie.component';
import { UpdateSerieComponent } from './Serie/update-serie/update-serie.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {MatButtonModule, MatIconModule, MatSelectModule, MatSortModule, MatTableModule, MatTooltipModule} from '@angular/material';
import {HttpInterceptorService} from './login/HttpInterceptorService';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFilmComponent,
    FilmDetailsComponent,
    FilmListComponent,
    CreateSerieComponent,
    ListSerieComponent,
    UpdateSerieComponent,
    LoginComponent,
    LogoutComponent,
    UpdateFilmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
