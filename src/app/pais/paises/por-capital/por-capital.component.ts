import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  public hayError: boolean = false;
  public termino: string = '';
  public mostrarPaises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    //para que un observable se ejecute o dispare, tienes que primero estar subscrito
    //aca se consume el elemento http
    this.paisService.buscarCapital(this.termino).subscribe(
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
