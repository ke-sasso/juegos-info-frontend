import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {


  juegos: any[] = [];
  plataforma: string='';
  genero: string='';
  titulo: string='';
  formulario:any;
  filtro: any[] = [];
  datageneral: any[] = [];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getAllDatos().subscribe((data: any) => {
      this.juegos = data;
      this.datageneral=data;
    });
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      plataforma: new FormControl(''),
      genero: new FormControl(''),
    })
  }


  viewdata(data: any){
    this.router.navigate(['/juego',data.id]);
  }

  filtrarJuegos(){
    var plataforma = this.formulario.value.plataforma;
    var genero = this.formulario.value.genero;
    var titulo = this.formulario.value.titulo;

    if(plataforma=='' && genero=='' && titulo==''){
      this.juegos = this.datageneral;
    }else{
      this.juegos  = this.juegos.filter(juego =>
        juego.title.toLowerCase().includes(titulo.toLowerCase()) &&
        juego.genre.toLowerCase().includes(genero.toLowerCase()) &&
        juego.platform.toLowerCase().includes(plataforma.toLowerCase())
      );
    }

  }

}
