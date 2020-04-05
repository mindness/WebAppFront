import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private baseUrl = 'http://localhost:8080/mindnessBdd/api/v1/series';

  constructor(private http: HttpClient) { }

  getSerie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSerie(serie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, serie);
  }

  updateSerie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSerie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSeriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
