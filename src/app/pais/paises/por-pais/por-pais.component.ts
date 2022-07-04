import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  public hayError: boolean = false;
  public termino: string = '';
  public mostrarPaises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    //para que un observable se ejecute o dispare, tienes que primero estar subscrito
    //aca se consume el elemento http
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.mostrarPaises = paises;
      },
      //manejo de errores
      (err) => {
        this.hayError = true;
        this.mostrarPaises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //Todo : crear sugerencia
  }
}
