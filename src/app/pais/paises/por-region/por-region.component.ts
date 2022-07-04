import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  public regiones: string[] = [
    'EU ',
    'EFTA ',
    'CARICOM ',
    'PA ',
    'AU ',
    'USAN ',
    'EEU ',
    'AL ',
    'ASEAN ',
    'CAIS ',
    'CEFTA ',
    'NAFTA ',
    'SAARC ',
  ];
  public regionActiva: string = '';
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCss(r: string) {
    return r === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    //hacer el llamado al servicio

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
