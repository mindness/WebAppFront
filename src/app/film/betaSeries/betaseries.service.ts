import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceBeta {

  private baseUrl = 'https://api.betaseries.com';

  constructor(private http: HttpClient) { }

  getInfo(type: string, title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}?title=${title}&key=f1b079b77db5&nbpp=1`);
  }

}
