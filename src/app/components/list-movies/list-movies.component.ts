import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {


  peliculas: any[] = [];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getPeliculas().subscribe((data: any) => {
      this.peliculas = data;
    });
  }


  viewmovie(data: any){
    this.router.navigate(['/movie',data.id]);
  }

}
