import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './domain/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Movie> {
    return this.http.get(`${this.apiUrl}/games`)
  }

  getPelicula(id:any): Observable<Movie> {
    return this.http.get(`${this.apiUrl}/game?id=${id}`);
  }

}
