import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';


const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full'},
  { path: 'juegos', component: ListMoviesComponent },
  { path: 'juego/:id', component: DetailMovieComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
