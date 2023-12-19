import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './domain/juego';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getAllDatos(): Observable<Juego> {
    return this.http.get(`${this.apiUrl}/games`)
  }

  getData(id:any): Observable<Juego> {
    return this.http.get(`${this.apiUrl}/game?id=${id}`);
  }

}
