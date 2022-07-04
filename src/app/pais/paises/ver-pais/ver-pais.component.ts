import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  /**ActivateRoute sirve para subscribirse a cualquier cambio que presente la URL
   * son los cambios que permitimos en el pais / :id
   */
  public pais!: Country[];
  constructor(
    private actvRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.actvRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap((resp) => console.log(resp))
      )
      .subscribe((pais) => (this.pais = pais));
  }
}
