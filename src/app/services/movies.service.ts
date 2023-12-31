import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './domain/juego';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllDatos(): Observable<Juego> {
    return this.http.get(`${this.apiUrl}/games`)
  }

  getData(id:any): Observable<Juego> {
    return this.http.get(`${this.apiUrl}/game?id=${id}`);
  }

}
