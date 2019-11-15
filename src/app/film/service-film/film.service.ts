import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = 'http://localhost:8080/mindnessBdd/api/v1/films';

  constructor(private http: HttpClient) { }

  getFilm(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFilm(film: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, film);
  }

  updateFilm(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFilmsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
